const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(path.join(__dirname,"views","full5.html"));
});

app.post("/calculate",function(req,res){

let weight=parseFloat(req.body.weight);
let height=parseFloat(req.body.height);

height=height/100;

let bmi=weight/(height*height);

let category;

if(bmi<18.5){
category="Underweight";
}
else if(bmi<24.9){
category="Normal";
}
else if(bmi<29.9){
category="Overweight";
}
else{
category="Obese";
}

res.send(`
<h1>BMI Result</h1>
<p>Your BMI: ${bmi.toFixed(2)}</p>
<p>Category: ${category}</p>
<br>
<a href="/">Calculate Again</a>
`);
});

app.listen(PORT,function(){
console.log("Server running at http://localhost:3000");
});