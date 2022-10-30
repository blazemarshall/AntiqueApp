const { default: knex } = require( "knex" )
const knexInstance = require( "../db/db" )
const controller = require('./antiques.controller')

function list(){
    return knexInstance('antiques')
    .select('*')
}
function read(id){
    return knexInstance('antiques')
    // .select('*')
    .where({id})
    .then((result)=>result[0])
}

function create(newAntique){
    return knexInstance('antiques')
    .insert(newAntique,'*')
    .then((result)=>result[0]);
}

function updateAntique(antique){
    return knexInstance('antiques')
    .where("id",antique.id)
    .update(antique,'*')
}

function destroyAntique(name){ 
    return knexInstance("antiques")
    .del()
    .where({"name": name})
}

module.exports = {
    list,
    create,
    read,
    destroyAntique,
    updateAntique,
}