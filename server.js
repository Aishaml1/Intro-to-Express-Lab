import Express from "express";

const app = Express();

// HTTP --> GET, POST, PUT, DELETE
// GET -> how you get informations -> app.get()
// Put -> how u change information -> app.put
// Post -> how you change or add information app.post()
// Delete -> how you delete information app.delete

app.set('view engine', 'ejs')

//request & response
// request = all information coming in
// send information = respond

app.get('/flowers', function(req, res) {
res.render('flowers')
})

app.listen(3000, function(){
    console.log('Listening in 3k!')
})