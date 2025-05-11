import time
import requests
from datetime import datetime

LOG_FILE = "/logs/service1.log"
SERVICE2_URL = "http://service2:8000"

def log_message(msg):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    full_msg = f"[{timestamp}] {msg}"
    with open(LOG_FILE, "a") as f:
        f.write(full_msg + "\n")
    print(full_msg)

for i in range(20):
    msg = f"Message {i+1} from service1"
    log_message(msg)
    try:
        requests.post(SERVICE2_URL, data=msg)
    except Exception as e:
        log_message(f"Failed to send: {e}")
    time.sleep(2)

# Send STOP message
log_message("Sending STOP")
requests.post(SERVICE2_URL, data="STOP")

