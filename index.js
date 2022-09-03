const express = require("express");
const app = express();

const compiler = require("compilex");
var options = {stats : true}; 
compiler.init(options);


app.use(express.static(__dirname + ''));

app.get("/",function(req,res){
    console.log("Visitor to landing page");
    res.sendFile("/index.html");
    
});

app.get("/c",function(req,res){
    console.log("Hello one");
    var plang =req.query.pl;
    var cus_input=req.query.radio1;
    var code = req.query.code;
    // res.send(code);
    if(plang == "C" || plang == "C++"){
        if(cus_input){
            var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
            compiler.compileCPP(envData , code , function (data) {
            res.send(data);
            //data.error = error message 
            //data.output = output value
            });
        }   

// C/C++ with inputs 

        else{
            var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
            compiler.compileCPPWithInput(envData , code , input , function (data) {
            res.send(data);
            });
        }
    }

//Java
    if(plang="Java"){
        if(cus_input){
        var envData = { OS : "linux" }; // (Support for Linux in Next version)
        compiler.compileJava( envData , code , function(data){
        res.send(data);
        
            });
        }
          
    else{
//Java with inputs
            var envData = { OS : "linux" }; // (Support for Linux in Next version)
            compiler.compileJavaWithInput( envData , code , input ,  function(data){
            res.send(data);
            });
        }    
    }
//python
        if(plang = "Python"){
        if(cus_input){
            var envData = { OS : "linux" }; 
            compiler.compilePython( envData , code , function(data){
            res.send(data);
            });    
        }

//python with inputs
        else{
            res.send("python without outputs");
            var envData = { OS : "linux" }; 
            compiler.compilePythonWithInput( envData , code , input ,  function(data){
            res.send(data);        
            });
        }
}

});


app.listen(3000,function(){
    console.log("connected to /");
});
