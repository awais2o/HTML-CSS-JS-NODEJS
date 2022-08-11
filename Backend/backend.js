const http=require('http')
const host='127.0.0.1';
const port=80 
const fs=require('fs')
const Home=fs.readFileSync("./index.html");
const Contact=fs.readFileSync("./Contact.html");
const About=fs.readFileSync("./About.html");

const server=http.createServer((req,res)=>
{
url=req.url;
res.statusCode=200;
res.setHeader('content-type','text/html')
if(url=='/')
{res.end(Home)
}
else if(url=='/About.html')
{
res.end(About)
}
else if(url=='/Contact.html'){
    res.end(Contact)
}
else{
    console.log("pata ni kya hoa")
}
})
server.listen(port,host);