const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.set("view engine","ejs")

const myMiddleWare = (req, res, next) => {
  console.log('middleware log');
  next();
};
app.use(express.static('public'));
app.use(myMiddleWare);



// app.get('/',(req,res) => {
//     const blog = { id: 1, title: "Blog title", description: "Blog description" }
//     res.send(blog)
// })

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} numaralı portta başlatıldı`);
});
