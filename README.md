##Building StrongLoop's metrics dashboard with Angular, Bootstrap and Raspberry Pi


###WHAT 

"Matt, We need a dashboard!", and that's how this story always begins. Exec's love dashboards and why not? realtime metrics, charts, github updates, twitter love, KPI's! Setting aside the what and why of the classic corporate dashboard.  The requirements for the StrongLoop Dashboard were pretty simple: 

	1. Use Node
	1. Use modern web framework's
	1. Make it realtime
	1. It needs to be displayable everywhere ( desktop web, LCD wall display, mobile )

For the first iteration I picked the LCD wall display.  It was the perfect excuse to get my VP Jimmy to order a Raspberry Pi *to play with* cost effectively enable any wall LCD in wifi reach with the dashboard.


The Technology soup is a Raspberry Pi configuration that runs a local Node server to display an Angular Twitter Bootstrap web page.  the Raspian server configuration includes chromium runing in kiosk mode.  Additionally there is a lc

###WHY

It's easy standup and configure it for your own needs.  You can order the parts outlined in the Bill of Materials ( BOM ). The full source code is available on https://github.com/strongloop-community/node-angular-raspberry-pi-dashboard .  The repository contains everything from the Raspberry Pi provision scripts to the https://github.com/angular/dashboard.angularjs.org angular dashboard inspired web applicatoin.

###HOW

Get started by creating your Raspbian SD Card.


Provision your Raspberry Pi system


Standup and start the server 



BootStrap Angular 



Start with a fresh install of Raspbian http://www.raspberrypi.org/quick-start-guide

On boot configure the following:

1. Expand FileSystem
1. Change password
1. Enable Boot to Desktop
1. Reboot

Remote to the device 

1. ssh 192.18.2.2 -l pi
1. run the provision.sh 

```
cd ~/
git clone https://github.com/strongloop-community/node-angular-raspberry-pi-dashboard dashboard
cd dashboard/scripts

sudo chmod +x refresh.sh
```




###Whats next







