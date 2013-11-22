##Building StrongLoop's metrics dashboard with Angular and Raspberry Pi

"Matt, We need a dashboard!", and that's how this story always begins. Everyone love's a dashboards and why not? realtime metrics, charts, github updates, twitter love, KPI's! Setting aside the what and why of the classic corporate dashboard metric content, the requirements for the StrongLoop Dashboard were pretty simple:

1. Use Node
1. Use modern web framework's
1. It needs to be displayable everywhere ( desktop web, LCD wall display, mobile )
1. Make it realtime
1. Make it cool!

For the first iteration I picked the LCD wall display.  It was the perfect excuse to get our Marketing VP to order a Raspberry Pi ~~to play with~~ as cost effective way to enable any wall LCD in wifi range with the dashboard.

The "Technology soup" is a [raspbian wheezy](http://www.raspbian.org/) Raspberry Pi device that runs a local Node server to display a single [AngularJS](http://angularjs.org/) page with the [chromium](http://www.chromium.org/) browser in kiosk mode.

###Pi Dashbaord 

![image](https://raw.github.com/strongloop-community/node-angular-raspberry-pi-dashboard/master/screenshots/image1.png)

It's easy standup and configure it for your own needs.  You can order the parts outlined in the Bill of Materials ( BOM ). The full source code is available on https://github.com/strongloop-community/node-angular-raspberry-pi-dashboard .  The repository contains everything from the Raspberry Pi provision scripts to the https://github.com/angular/dashboard.angularjs.org angular dashboard inspired web application.



The Node server is a 



###Stand up your Raspberry Pi dashboard in 5 minutes

Get started by creating your Raspbian SD Card and … 

####Starting with a fresh install of Raspbian

Start with a stack configuration of Rasp

On boot configure the following:

1. Expand FileSystem
1. Change password
1. Enable Boot to Desktop
1. Reboot

Now is a good time to configure your wifi or network settings.

####Standing up the dashbaord on your Raspberry Pi

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



Make modifications with Node-Mirror 



###Whats next







