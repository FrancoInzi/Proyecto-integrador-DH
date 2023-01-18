const express=require("express")
const path=require("path")

const app=express();

const port =process.env.PORT || 3030;

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


app.get('/',(req,res)=>{
    let htmlVentanas=(path.resolve(__dirname,'./views/home.html'))
    res.sendFile(htmlVentanas)
})

app.get('/register',(req,res)=>{
    let htmlVentanas=(path.resolve(__dirname,'./views/register.html'))
    res.sendFile(htmlVentanas)
})

app.get('/login',(req,res)=>{
    let htmlVentanas=(path.resolve(__dirname,'./views/login.html'))
    res.sendFile(htmlVentanas)
})

app.listen(port,()=>console.log(`servidor escuchando en puerto ${port}`));