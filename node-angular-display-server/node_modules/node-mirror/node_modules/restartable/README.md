## Description

makes it possible to restart your app without restarting the main node.js process itself.  
restartable takes advantage of the node.js cluster module. When a node process is forked using the cluster module, all the sourcefiles are being read from disk, making a virtual restart of node.js possible.  
It is recommended for development or maintainance work.  
It has not been tested in combination with apps that actually use cluster.  

## Usage

```js
require("restartable")(function(parRestartableObj){
  console.log("this code is restartable");
  setTimeout(function(){
    parRestartableObj.restart();
  }, 2000);
}, function(parRestartableObj){
  console.log("this code is not restartable");
  setTimeout(function(){
    parRestartableObj.restart();
  }, 8000);
});
```
## License

BSD
