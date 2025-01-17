const ensureAuthenticated = require('../Middleware/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, async(req, res) => {
    res.status(200).json([
        {
            name:'mobile',
            price:1000
        }, {
            name:'Tv',
            price:80000
        },

    ])
})

module.exports = router;