// db service
const service = require("./antiques.service")
const express = require("express")
const asyncErrorBoundary = require( "../errors/asyncErrorBoundary" );
const ColumnCompiler = require( "knex/lib/schema/columncompiler" );



//middleware imports
// const asyncEB = require("../errors/asyncErrorBoundary");
// const {} = require("./antiques.middleware");

// ------------------------------list function----------------------------
async function list(req,res,next){
    const category = req.params.category
    const data = await service.list()
    try{
       
        res.json({data})
    } catch (err){
        next(err)
    }
}

//---------------------create--------------------------------
async function create(req,res,next){
    console.log(req.body,'req.body')
    const data = await service.create(req.body.data);
    console.log(data,"data controller")
    res.status(201).json({data});
}

//---------------------read---------------------------------------
async function read(req,res,next){
    // const category = req.body.data.category.toString()
    console.log('made it to service')
    const data = await service.read(req.params.antiqueId)
    console.log(data,"service data")
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