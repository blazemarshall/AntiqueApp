// db service
const service = require("./antiques.service")
const express = require("express")
const asyncErrorBoundary = require( "../errors/asyncErrorBoundary" )



//middleware imports
// const asyncEB = require("../errors/asyncErrorBoundary");
// const {} = require("./antiques.middleware");

// ------------------------------list function----------------------------
async function list(req,res,next){
    try{
        const data = await service.list()
        res.json({data})
    } catch (err){
        next(err)
    }
}

//---------------------create--------------------------------
async function create(req,res,next){
    const data = await service.create(req.body.data);
    res.status(201).json({data});
}

//---------------------read---------------------------------------
async function read(req,res,next){
    const data = await service.read(req.params.antiqueId)
    res.json({data})
}1

//-----------------------update-----------------------------------------
async function update(req,res,next){
    const antique = req.body.data;
    await service.updateAntique(antique);
    res.status(200).json({data:antique})
    // we will get here eventually
}

async function deleteAntique(req,res,next){
const antique = req.body.data;
await service.destroyAntique(antique)
}




module.exports = {
    list:asyncErrorBoundary(list),
    read:asyncErrorBoundary(read),
    create:asyncErrorBoundary(create),
    deleteAntique:asyncErrorBoundary(deleteAntique),
    update:asyncErrorBoundary(update)
}