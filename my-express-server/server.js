// set up a server and how to get request and response using node and express

const express = require("express");

const app = express();

app.get("/", function(request, response){
	//console.log(request);
	
	response.send("<h1>hey!hello pretty</h1>");
});

app.listen(3000,function(){
	console.log("server started on port 3000");
});
