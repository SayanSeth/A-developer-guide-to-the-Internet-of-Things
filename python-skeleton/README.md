# Getting started with the skeleton

The skeleton has some dependencies that should be installed with

```
pip install --user -r requirements.txt
```

# How to use the SenseHAT Simulator

The SenseHAT simulator has two components, a web-based user interface to see pixel status and change temperature, and a web socket server that controls the UI.

The web socket server exposes a Python API that has the same interface as the real SenseHAT API for `set_pixels` and `get_temperature`. You can use it as a plug-in replacement in your code. The SenseHat simulator is located in `sense_hat.py` in this directory and it requires no further setup. The web socker server listens on port 9000.

The user interface is located in the `public` directory. In order to run the user interface, we use a web server to serve from this directory on port 8000. A very easy way to get this going is to run

```
python -m SimpleHTTPServer 8000
```

from the `public` directory. Any other tool that can start up a web server from the `public` directory works fine, too.

To access the user interface, go to `http://localhost:8000` if you are working on the Pi directly. If you are connected via `ssh`, edit `public/index.html` and on line 257 replace `localhost` with the ip address of your Pi. If your Pi has `192.168.1.42`, the line should read

```
    ws = new WebSocket('ws://192.168.1.42:9000/');
```

Then open a browser and go to http://192.168.1.42:8000.

# How to use your SenseHAT device

If you have a SenseHAT device, just move the SenseHAT simulator, i.e.
`sense_hat.py` in this directory to another location or delete it.  Also remove the `sense_hat.pyc` file if it exists.   
Your Python code will then use the real SenseHAT APIs.
