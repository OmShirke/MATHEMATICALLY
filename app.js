const express = require('express')

const app = express()

app.set('view engine', 'ejs')

// middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.render('index', { title : 'MATHEMATICALLY'})
})

app.get('/about', (req, res) => {
    res.render('about', {title : 'About'})
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
})