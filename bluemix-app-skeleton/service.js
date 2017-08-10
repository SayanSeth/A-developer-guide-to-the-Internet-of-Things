function Service(appClient) {
  this.appClient = appClient;
  this.lastTemp = 0;
  //this.testStr = "test str";
}

Service.prototype.connect = function() {
  // TODO connect to iotf here with this.appClient
  this.appClient.connect();	

  this.appClient.on('connect', function() {
    // TODO hook up device events here with this.appClient
  this.appClient.subscribeToDeviceEvents('senseHAT', 'senrpi123', 'event');
  }.bind(this));

  // TODO act on device events and call handleTempEvent when the right type of event arrives
  this.appClient.on('deviceEvent', function(deviceType, deviceId, eventType, format, payload) {
     //this.testStr = 'deviceType='+deviceType + ' deviceId='+deviceId+' payload='+payload;
     var jsonObj = JSON.parse(payload);
     console.log('temp:' + jsonObj.d.temperature);
     this.handleTempEvent(jsonObj.d.temperature);
  }.bind(this));
};

Service.prototype.handleTempEvent = function(temp) {
  // handle temperature changes here and call this.warningOn/this.warningOff accordingly
  if ( this.lastTemp <= 29 && temp > 29 ) 
  {
    console.log('Warning on!');
    this.warningOn();
  }
  else if ( this.lastTemp > 29 && temp <= 29) 
  {
    console.log('Warning off!');
    this.warningOff();
  }
  
  this.lastTemp = temp;
};

Service.prototype.warningOn = function() {
  // TODO send a device commmand here
  var cmd = {"screen":"on"};
  cmd = JSON.stringify(cmd);
  this.appClient.publishDeviceCommand("rpigateway", "rpi123", "display", "json", cmd);
};

Service.prototype.warningOff = function() {
  // TODO send a device commmand here
  var cmd = {"screen":"off"};
  cmd = JSON.stringify(cmd);
  this.appClient.publishDeviceCommand("rpigateway", "rpi123", "display", "json", cmd);
};

module.exports = Service;