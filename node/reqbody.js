/**
 * Request Body
 * 
 * learn parsing data body dari request
 * 
 * 
 */

/**
 * bentuk transaksi client ada 2 yaitu upload dan download
 * 
 * Stream adalah seluruh kegiatan transaksi data dari awal sampai selesai, yaitu:
 * -----1. Mulai sari inisiasi data pada tujuan
 * -----2. Pemisahan data yang akan dikirim menjadi bagian kecil (chunks)
 * -----3. Pengirim data chunks ke tujuan disebut dengan Buffering
 * -----4. Setelah data selesai dibuffer semua, Proses data agar menjadi kembali
 * 
 */

const http = require('http');
const querystring = require("querystring")
const server = http.createServer((req, res)=> {
    let urlReq, methodReq, dataRequest

    const chunksArr = [];
    const dataResponse = {};

    res.setHeader("Content-Type", "application/json")

    urlReq = req.url;

    methodReq = req.method?? "get"

    //kita akan membuat routing ke login

    if(urlReq.toLowerCase() === "/login" ){
        if(methodReq.toLowerCase()==="post"){
            //tandai halaman login
            dataResponse.data = "Ini adalah Halaman Login bro"
        }else if (methodReq.toLowerCase() === "post"){
            req.on('data', (chunks)=>{      
            //tambahkan chunk ke chunksArr
            chunksArr.push(chunk)
            });
        } else {
            dataResponse.data = "Hanya menerima method GET dan POST"
        }
    }else{
        dataResponse.data = "Gunakan Endpoint /login"
    }

    // setelah data request selesai, akan diterima oleh server:
    req.on("end", ()=>{
        //jika chunk ada datanya :
        if(chunksArr.length !==0) {
            dataRequest = Buffer.concat(chunksArr).toString();
            console.log(dataRequest)

            let requestObj = querystring.parse(dataRequest);
            
            dataResponse.data = requestObj;

        };
        return res.end(JSON.stringify(dataResponse));                 
    });
    
});

server.listen(7000)