const {Router} = require('express')
const News = require('models/news')
const router = Router()

router.get('/', async (req, res) => {
    const news = await News.find({})
    res.render('index', {
        title: 'News list',
        isIndex: true,
        news
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create news',
        isCreate: true
    })
})
module.exports = router