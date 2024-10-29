const http = require("http")
const fs = require("fs")


// application/json
const server = http.createServer((req, res)=>{


    console.log(req.url)
    const url = req.url;
    
    if(url === "/home"){
    
    res.setHeader("Content-Type", "text/html");
    fs.readFile("index.html", 'utf8', (err,data)=>{
    
        if(err){
            console.log('error');
        }

        res.write(data)
        res.end()
    })

    }
})

server.listen(4444, console.log("your server is running at port 3000"))