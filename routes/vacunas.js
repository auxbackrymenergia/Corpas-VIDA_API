const express = require('express');
const router = express.Router();
const {
    getVacuna,
    getVacunas,
    createVacuna,
    updateVacuna,
    deleteVacuna
} = require('../controllers/vacunas');


router
    .route('/')
    .get(getVacunas)
    .post(createVacuna)

router
    .route('/:id')
    .get(getVacuna)
    .put(updateVacuna)
    .delete(deleteVacuna);
/*
router.get('/', (req, res) => {
    //res.send('<h1>Hello from express</h1>');
    //res.send({name: "Miguel"});
    //res.json({name: "Miguel"});
    //res.status(400).json({ succes: false });
    res.status(200).json({
        success: true,
        msg: 'Show all bootcamps'
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `get bootcamp ${req.params.id}`
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Create new bootcamp"
    });
});

router.put('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    });    
});

router.delete('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    });    
});*/

module.exports = router;