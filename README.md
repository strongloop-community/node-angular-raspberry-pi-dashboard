

##Install

Get started by creating your Raspbian SD Card

###Starting with a fresh install of Raspbian

Start with a stack configuration of Rasp

On boot configure the following:

1. Expand FileSystem
1. Change password
1. Enable Boot to Desktop
1. Reboot

Now is a good time to configure your wifi or network settings.

###Installing and Configuring

Remote to the device, for me my Raspberry Pi is confuted with the static IP address 192.168.2.2

1. ssh 192.168.2.2 -l pi
1. run the wget ::// provision.sh 
1. After the provision process reboot your system 
1. clone the rest of the repo
1. start the initialize script and let the system reboot


```
cd ~/
git clone https://github.com/strongloop-community/node-angular-raspberry-pi-dashboard dashboard
cd dashboard/scripts

sudo chmod +x refresh.sh
```


