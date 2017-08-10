from __future__ import print_function
import threading
from websocket_server import WebsocketServer
import math
import numpy as np
import time
import sys

class SenseHat():
    temperature = 20.4
    server = None
    block = True

    def new_client(self, client, server):
        print("New client connected and was given id %d" % client['id'])
	self.block = False

    def client_left(self, client, server):
        print("Client(%d) disconnected" % client['id'])

    def message_received(self, client, server, message):
        if message[0] == "Y":
                # Sample message: "Y29.2,80,1000"
                temp = message[1:].split(",")[0]
                print("Setting temperature:", temp)
                self.temperature = temp

    def __init__(self):
        t = threading.Thread(target=self.__startServer);
        t.daemon = True
        t.start()
	while self.block: 
            print('.',end="")
            sys.stdout.flush()
            time.sleep(1)

    def __startServer(self):
        self.server = WebsocketServer(9000)
        self.server.set_fn_new_client(self.new_client)
        self.server.set_fn_client_left(self.client_left)
        self.server.set_fn_message_received(self.message_received)
        self.server.run_forever()

    def set_pixels(self, pixelMap):
        message = "P"
        first = True
        pixelMapNp = np.array(pixelMap)
        pixelMapNp.shape = (192)
        for x in range(0,64):
            if (not first):
                message = message + ","
            message = message +str((x%8)) +","+str(int(math.floor(x/8)))+","+str(pixelMapNp[x*3])+","+str(pixelMapNp[x*3+1])+","+str(pixelMapNp[x*3+2])
            first = False
        self.server.send_message_to_all(message)

    def get_temperature(self):
        return float(self.temperature)
