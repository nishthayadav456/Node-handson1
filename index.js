const http=require("http")//core module it is providing the set of functions and methods.
const {dummyData}=require("./dummyData")
//postman
const details=JSON.stringify(dummyData)

const app = http.createServer((req,res)=>{
    console.log(req.url,'fetch the path from base url')
    //req.method=="PUT"
    if(req.url ==="/post" && req.method=="POST"){
        res.write(details)
        res.end()
    }
    else if(req.url === '/comment' && req.method==="GET"){
        // res.write("this is our comment  page")
        res.write("<h1>what is Node js.</h1>")
        res.write("<p> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p>")
        
        res.end()
    }
    else if(req.url === '/' && req.method==="GET"){
        res.write("<h1>what is Node js.</h1>")
        res.write("<p> Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p>")
        res.end()
    }
    else{
        res.write("404 page not found")
        res.end();
    }
   

});
app.listen(4000,()=>{
    console.log("server is running on port no 4000")
})

