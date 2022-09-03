const express = require("express");
const app = express();

const compiler = require("compilex");
var options = {stats : true}; 
// compiler.init(options);

// // C C++
//         var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
//         compiler.compileCPP(envData , code , function (data) {
//         res.send(data);
//         //data.error = error message 
//         //data.output = output value
//     });
// // C/C++ with inputs 

//         var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
//         compiler.compileCPPWithInput(envData , code , input , function (data) {
//         res.send(data);
//     });
// //Java
//         var envData = { OS : "linux" }; // (Support for Linux in Next version)
//         compiler.compileJava( envData , code , function(data){
//         res.send(data);
//     });  

// //Java with inputs
//         var envData = { OS : "linux" }; // (Support for Linux in Next version)
//         compiler.compileJavaWithInput( envData , code , input ,  function(data){
//         res.send(data);
//     });

// //python
//         var envData = { OS : "linux" }; 
//         compiler.compilePython( envData , code , function(data){
//         res.send(data);
// });    

// //python with inputs
//         var envData = { OS : "linux" }; 
//         compiler.compilePythonWithInput( envData , code , input ,  function(data){
//         res.send(data);        
// });


app.get("/",function(req,res){

    res.sendFile(__dirname + "../index.html");
    console.log("Visitor to landing page");
})

app.listen(3000,function(){
    console.log("connected to /");
});




function run(){
    document.getElementById("").value;
    if(selectvalue == c ||selectvalue == c++){
        res.send()
    }

}