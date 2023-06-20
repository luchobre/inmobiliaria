const express = require ('express');
const router = express.Router();

router.get('/casa', (req, res)=> {
    res.send(console.log('Hola esta llamando a la ruta /casa'))
})

module.exports = router;