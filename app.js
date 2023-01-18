const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3030

const publicFolderPath = path.resolve(__dirname, './public');
console.log(publicFolderPath);

app.use(express.static(publicFolderPath) );

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.listen(port,()=>console.log(`servidor escuchando en puerto ${port}`));