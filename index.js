const express = require('express')
const formidable = require('express-formidable')
const app = express()

const HOST = "localhost" //ip 127.0.0.1
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(formidable())




app.get('/', (req, res) => {
    res.send("Home Page")
})


const lodgingRoutes = require('./routes/lodgingRoutes')
app.use('/lodging', lodgingRoutes)

// app.get('/lodging', (req, res) => {
//     res.send("Hostel Page")
// })






const instituteRoutes = require('./routes/instituteRoutes')
app.use('/institute',instituteRoutes)



// app.get('/instituteadmin', (req, res) => {
//     res.send("Institute approval Page")
// })







app.listen(PORT, HOST, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server Running at http://${HOST}:${PORT}`);
        
    }
})