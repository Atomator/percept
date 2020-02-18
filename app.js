var express = require("express"),
    app = express();

app.listen(80, function(){
  console.log("Web App Up!");
});
app.get('/', function(req, res){
  res.send("index.ejs");
});
