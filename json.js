const http = require('http')
const fs = require ('fs')


let data;
const JSON_DATA = fs.readFileSync("./data.json")
data = JSON.parse(JSON_DATA)

const server = http.createServer((req, res)=>{
    const url = req.url
    const method = req.method;

    res.setHeader("Content-type", "application/json")

    if(method === "GET"){
        if(url.startsWith("/users?id=")){
            const id= url.split("=")[1];
             const filter = data.filter((item)=>{
                return item.id === id;
            })
        if(filter.length){
            res.write(JSON.stringify(filter))
        } else {
            res.write(JSON.stringify({ message: "not found"} ))
        }

    }else{
        res.write(JSON.stringify(data))
    }
    res.end()
    }

    if(method === "POST"){

        let body = "";
        req.on('data' , (buffer)=>{
            body += buffer;
        })

        req.on('end', ()=>{
            const newData = JSON.parse(body);

            const newUsers = {
                id: `${data.length + 1}`,
                ...newData,
            }

            data.push(newUsers)
            console.log(data)
            fs.writeFileSync("data.json", JSON.stringify(data), (err)=>{
                console.log(err)
            })
            res.write(JSON.stringify(newUsers))
            res.end()
        })
    }

    if(method === "DELETE"){
        let body ="";
        req.on("data", (buffer)=>{
            body+=buffer;
        })

        req.on("end",()=>{
            const idData = JSON.parse(body);
            const id = idData.id;

            const remove = data.filter((item)=>{
                return item.id !== id;
            })


            fs.writeFileSync("data.json", JSON.stringify(remove), (err)=>{
                console.log(err)
            })
        res.write(JSON.stringify({message: "DELETED"})) 
        res.end()
        })
    }
})


server.listen(4444 , console.log(`Your Server is Running at Port 4444`))