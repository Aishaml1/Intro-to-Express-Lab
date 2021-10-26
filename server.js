import express from "express";

const app = express()

app.set('view engine', 'ejs')

app.get('/flowers', function(req, res) {

    res.send('<h1> testing </h1>')
})

app.listen(3000, function(){
    console.log('Listening in 3k!')
})