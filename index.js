const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const newsRoutes = require('./routes/newslist')
//Hello, bro

const PORT = process.env.PORT || 4000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(newsRoutes)

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://andrey:OIe49criy18gHxNR@cluster0.wqgwm.mongodb.net/educationmongoo',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            })
        app.listen(PORT, () => {
            console.log('Server started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()
