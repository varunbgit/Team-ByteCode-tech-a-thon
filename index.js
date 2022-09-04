const express = require("express");
const app = express();
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: true })  




const compiler = require("compilex");
var options = {stats : true}; 
compiler.init(options);


app.use(express.static(__dirname + ''));
app.use(express.urlencoded({ extended: true }))

app.get("/",function(req,res){
    console.log("Visitor to landing page");
    res.sendFile("/index.html");
    
});

app.post("/c",urlencodedParser,function(req,res){
    compiler.flush(function(){
        console.log('All temporary files flushed !'); 
        });
        compiler.flushSync();


    console.log("Hello one");
    
    var cus_input=req.body.radio1;

    var code = req.body.code;
    var input = req.body.inputd;
    var plang =req.body.pl;
    // console.log(cus_input);
    // res.send(code);


    if(plang == "C" || plang == "C++"){
        if(cus_input === "false"){
            var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
            compiler.compileCPP(envData , code , function (data) {
      //      res.send(data);
            //data.error = error message 
            //data.output = output value
if(data.error)
{
    res.send(data.error);    		
}
else
{
    res.send(data.output);
}
            });
        }   

// C/C++ with inputs 

        else{

            
            var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
            compiler.compileCPPWithInput(envData , code , input , function (data) {
        //    res.send(data);
if(data.error)
        		{
        			res.send(data.error);    		
        		}
        		else
        		{
        			res.send(data.output);
        		}
            });
        }
    }

// //Java
//     if(plang="Java"){
//         if(cus_input=== "false"){
//         var envData = { OS : "linux" }; // (Support for Linux in Next version)
//         compiler.compileJava( envData , code , function(data){
//        // res.send(data);
// if(data.error)
//         		{
//         			res.send(data.error);    		
//         		}
//         		else
//         		{
//         			res.send(data.output);
//         		}
        
//             });
//         }
          
//     else{
// //Java with inputs
//             var envData = { OS : "linux" }; // (Support for Linux in Next version)
//             compiler.compileJavaWithInput( envData , code , input ,  function(data){
//             //res.send(data);
// if(data.error)
//         		{
//         			res.send(data.error);    		
//         		}
//         		else
//         		{
//         			res.send(data.output);
//         		}
//             });
//         }    
//     }
//python
     if(plang = "Python"){
        if(cus_input === "false"){
            
            var envData = { OS : "linux" }; 
            compiler.compilePython( envData , code , function(data){
            res.send(data);
                // if(data.error)
        		// {
        		// 	res.send(data.error);    		
        		// }
        		// else
        		// {
        		// 	res.send(data.output);
        		// }
            });    
        }

//python with inputs
        else{
            // res.send("python without outputs");
            var envData = { OS : "linux" }; 
            compiler.compilePythonWithInput( envData , code , input ,  function(data){
           // res.send(data);
if(data.error)
        		{
        			res.send(data.error);    		
        		}
        		else
        		{
        			res.send(data.output);
        		}        
            });
        }
}

});

app.get('/fullStat' , function(req , res ){
    compiler.fullStat(function(data){
        res.send(data);
    });
});

app.listen(3000,function(){
    console.log("connected to /");
});

