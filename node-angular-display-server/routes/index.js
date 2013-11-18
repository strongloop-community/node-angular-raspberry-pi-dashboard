// GET home page.

var os=require('os'); //http://nodejs.org/api/os.html#os_os_networkinterfaces 

//var MYmetricBoards = require('metricBoards.json')




function status(req, res){
  
  //process.env.PORT, process.env.IP
  var ifaces=os.networkInterfaces();
  
  var iPV4Interfaces = [];
  
  for (var dev in ifaces) {
    var alias=0;
	
    ifaces[dev].forEach(function(details){
      if (details.family=='IPv4') {
		  
		  var obj = {
		          address: details.address,
		          family: details.family,
				  name:dev
		      };
		  iPV4Interfaces.push(obj);
		  
          console.log(dev+(alias?':'+alias:''),details.address);
          ++alias;
      }
    });
  }//end for
  
  res.render('status', { title: 'dashboard-server', iPV4Interfaces:iPV4Interfaces });
}//end status


function index(req, res){
	
	//local metricBoards for randomly rotating
	var metricBoards = [];
	metricBoards.push("dashboard-static.html");
	metricBoards.push("http://woot.com");
	metricBoards.push("http://reddit.com");
	metricBoards.push("http://bl.ocks.org/mbostock/raw/5977197/");
	metricBoards.push("http://bl.ocks.org/mbostock/raw/5100636/");
	metricBoards.push("http://bl.ocks.org/mbostock/raw/4679202/");
	metricBoards.push("http://bl.ocks.org/mbostock/raw/6746848");
	metricBoards.push("SVG-simple.html");
	metricBoards.push("http://news.ycombinator.com");
	//metricBoards.push("simpleSVG-barChart.html");
	//metricBoards.push("SVG-globe.html");
	
  //process.env.PORT, process.env.IP
  var ifaces=os.networkInterfaces();
  
  var iPV4Interfaces = [];
  
  for (var dev in ifaces) {
    var alias=0;
	
    ifaces[dev].forEach(function(details){
      if (details.family=='IPv4') {
		  
		  var obj = {
		          address: details.address,
		          family: details.family,
				  name:dev
		      };
		  iPV4Interfaces.push(obj);
		  
          console.log(dev+(alias?':'+alias:''),details.address);
          ++alias;
      }
    });
  }//end for
  
	//var boardURL = metricBoards[ Math.floor((Math.random()*metricBoards.length)+1); ] 
	//var boardURL = "dashboard-static.html";//metricBoards[ 0 ]; 
	var boardURL = metricBoards[ Math.floor((Math.random()* metricBoards.length ) ) ] 
	
	var user = {
		picURL: "https://pbs.twimg.com/profile_images/378800000261764427/63adb78327a8017fb671e76411c1902a_bigger.png",
		twitterID: "@strongloop"
	}
	
  res.render('index', { title: 'dashboard-server', currentUser:user, iFrameURL: boardURL, iPV4Interfaces:iPV4Interfaces });

}//end index

// Set up routes
module.exports = function(app, options) {
  app.get('/', index);
	app.get('/status', status);
};
