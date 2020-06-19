// set up a server and how to get request and response using node and express

const express = require("express");

const app = express();

app.get("/", function(request, response){
	//console.log(request);
	
	response.send("<h1>hey!hello pretty</h1>");
});

app.get("/contact", function(request, response){
	
	response.send("<h1>hey!contact me at dhruvibansal@gmail.com</h1>");
});

app.get("/about", function(request, response){
	
	response.send("<h1>hey!MY name is Dhruvi .I love coffee.</h1>");
});
app.get("/hobbies", function(request, response){
	
	response.send(".I am a web developer");
});

app.listen(3000,function(){
	console.log("server started on port 3000");
});
