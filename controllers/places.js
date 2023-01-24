const router = require('express').Router()

// More code in a moment. (Updated with this code snippet)
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

