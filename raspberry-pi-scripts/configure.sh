#!/bin/sh
	
cd ~/dashboard
echo "init.d - piBoard Commands"
#sudo update-rc.d -f piBoard remove
sudo cp raspberry-pi-scripts/commands/piBoard /etc/init.d/
sudo chmod 755 /etc/init.d/piBoard
sudo update-rc.d piBoard defaults
# test with /etc/init.d/piBoard start

echo "update LXDE autostart script"
sudo cp raspberry-pi-scripts/autostart /etc/xdg/lxsession/LXDE

echo "restart"
sudo reboot

