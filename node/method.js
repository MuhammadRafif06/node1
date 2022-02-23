const http = require('http');

const server = http.createServer((req, res)=> {
    let url, method, dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url;

    method = req.method?? "get" //ambil methodnya, jika tidak ada maka diubah menjadi get

    if(url === "/"){
        dataResponse = {
            data: "ini adalah halaman HomePage"
        };
    } else if(url.toLowerCase() === "/login") {
        if(method.toLowerCase()==="post"){
            dataResponse = {
                data: "Anda login dengan method POST"
            };
        }else {
            dataResponse = {
                data: "Anda harus login dengan method POST"
            }
        } 
    } else {
        dataResponse = {
            data: "404 not found"
        }
    }

    return res.end(JSON.stringify(dataResponse))
});

server.listen(5000)