const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/",function(req,res){
  console.log("hello from get Method");
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var height =Number(req.body.num1);
  var weight =Number(req.body.num2);
  // var check = req.body.mode;
  console.log(height);
  console.log(weight);
  var bmi = weight/(height*height);
  res.send("Hello You BMI Score is: "+bmi);
});

app.listen(8080);
