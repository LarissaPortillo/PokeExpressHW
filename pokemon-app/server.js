const express=require('express');
const app=express();
const port=3000;
const pokemon=require('./models/pokemon');

app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());

app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!');
});

//not using Index
// app.get('/pokemon',(req,res)=>{
//     res.send(pokemon);
// })

//using Index
app.get('/pokemon',(req,res)=>{
    res.render('Index');
});

app.listen(port,()=>{
    console.log('Listening on port ',port);
});