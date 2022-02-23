/**
 * URL Query String
 * 
 * contoh:
 * URL Dari sekedar https://www.google.com/
 * Kemudian kita masukkan keyword Indonesia di dalam kolom pencarian Google
 * 
 * q = key
 * Indonesia = value
 * 
 * digunakan untuk mengirim data ke server dengan method GET.
 * 
 */

const http = require('http');
const url = require('url')
const querystring = require('querystring') 

const server = http.createServer((req, res)=>{
    
let urlRequest, //Berisi path yang terdapat di request
urlObj,     //Berisi URL yang telah diproses
urlQuery,   //object dari Query
dataResponse //object dari query yang udah di parsing

res.setHeader("Content-Type", "application/json")

urlRequest = req.url;

//convert url request menjadi object

urlObj = url.parse(urlRequest);
console.log(urlObj)

//kita ambil properti yang terdapat di objek url

urlQuery = urlObj.query;

if(!urlQuery){
    dataResponse = {
        data: "Query tidak ditemukan"
    };

    return res.end(JSON.stringify(dataResponse));
}
dataResponse = querystring.parse(urlQuery);
return res.end(JSON.stringify(dataResponse));

});

server.listen(6000)
