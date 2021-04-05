
const Vacuna = require("../models/Vacuna");

exports.getVacunas = async (req, res, next)=>{
    try{
        const vacunas = await Vacuna.find();
        res.status(200).json({
            success: true,
            data: vacunas
        });
    }
    catch(err){
        res.status(400).json({success: false});
    }
};

exports.getVacuna = (req, res, next)=>{
    
    res.status(200).json({
        success: true,
        msg: `get vacuna ${req.params.ids}`
    });
};


exports.createVacuna = async (req, res, next)=>{
    /*console.log(req.body);
    res.status(200).json({
        success: true,
        msg: "Create new bootcamp"
    });*/
    

    try{
        const vacuna = await Vacuna.create(req.body);

        res.status(201).json({
            success: true,
            data: vacuna
        });
    }
    catch(err){
        res.status(400).json({success: false});
    }
};

exports.updateVacuna = (req, res, next)=>{
    res.status(200).json({
        success: true,
        msg: `Update vacuna ${req.params.id}`
    });   
};

exports.deleteVacuna = (req, res, next)=>{
    res.status(200).json({
        success: true,
        msg: `Delete vacuna ${req.params.id}`
    });   
}