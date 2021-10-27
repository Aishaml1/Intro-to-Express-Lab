// import modules
import express from 'express'

//imports from data 
import * as flowersDb from './data/flowers.js'
import { find } from './data/flowers.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

// HTTP --> GET, POST, PUT, DELETE
// GET -> how you get informations -> app.get()
// Put -> how u change information -> app.put
// Post -> how you change or add information app.post()
// Delete -> how you delete information app.delete
//request & response
// request = all information coming in
// send information = respond
// Fetch from databases

//* app.get() is a call back function
//*res.render() - Render a view template and send the resulting HTML to the browser. 
//*res.redirect() - Tell the browser to issue another GET request.
//*res.json() - Send a JSON response (used when we communicate via AJAX)


app.get('/flowers', function(req, res) {
flowersDb.find({}, function(error, flowers) {
    res.render('flowers/index', {
        flowers: flowers,
        error: error
        })
    })
})


// Tell the app to listen on port 3000

app.listen(3000, function(){
    console.log('Listening in 3k!')
})































