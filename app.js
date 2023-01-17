const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
console.log(publicFolderPath);

app.use(express.static(publicFolderPath) );

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/views/home.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, './public/views/login.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, './public/views/register.html'));
});

app.listen(3030, () => {
    console.log('Servidor corriendo');
});