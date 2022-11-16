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


// furniture table-------------------------------
function destroyFurnitureAntique(name){ 
    return knexInstance("antiques")
    .del()
    .where({"name": name})
}
function furnitureRead(id){
    return knexInstance('furniture')
    // .select('*')
    .where({id})
    .then((result)=>result[0])
}
function furnitureList(){
    return knexInstance('furniture')
    .select('*')
}
function createFurniture(newAntique){
    console.log(newAntique,"furn service")
    return knexInstance('furniture')
    .insert(newAntique,'*')
    .then((result)=>result[0]);
}
function updateFurnitureAntique(antique){
    return knexInstance('furniture')
    .where("id",antique.id)
    .update(antique,'*')
}

// book table----------------------------------------
function destroyBookAntique(name){ 
    return knexInstance("antiques")
    .del()
    .where({"name": name})
}
function bookRead(id){
    return knexInstance('books')
    // .select('*')
    .where({id})
    .then((result)=>result[0])
}
function bookList(){
    return knexInstance('books')
    .select('*')
}
function createBook(newAntique){
    return knexInstance('books')
    .insert(newAntique,'*')
    .then((result)=>result[0]);
}
function updateBookAntique(antique){
    return knexInstance('books')
    .where("id",antique.id)
    .update(antique,'*')
}
// dinnerWare table-----------------------------------
function destroyDinnerWareAntique(name){ 
    return knexInstance("antiques")
    .del()
    .where({"name": name})
}
function dinnerWareRead(id){
    return knexInstance('antiques')
    // .select('*')
    .where({id})
    .then((result)=>result[0])
}
function dinnerWareList(){
    return knexInstance('dinnerWare')
    .select('*')
}
function createDinnerWare(newAntique){
    return knexInstance('dinnerWare')
    .insert(newAntique,'*')
    .then((result)=>result[0]);
}
function updateDinnerWareAntique(antique){
    return knexInstance('dinnerWare')
    .where("id",antique.id)
    .update(antique,'*')
}
// decor table-------------------------------------
function destroyDecorAntique(name){ 
    return knexInstance("antiques")
    .del()
    .where({"name": name})
}
function decorRead(id){
    return knexInstance('antiques')
    // .select('*')
    .where({id})
    .then((result)=>result[0])
}
function decorList(){
    return knexInstance('decor')
    .select('*')
}
function createDecor(newAntique){
    return knexInstance('decor')
    .insert(newAntique,'*')
    .then((result)=>result[0]);
}
function updateDecorAntique(antique){
    return knexInstance('decor')
    .where("id",antique.id)
    .update(antique,'*')
}
// tool table------------------------------------------------
function destroyToolAntique(name){ 
    return knexInstance("antiques")
    .del()
    .where({"name": name})
}
function toolRead(id){
    return knexInstance('antiques')
    // .select('*')
    .where({id})
    .then((result)=>result[0])
}
function toolList(){
    return knexInstance('tool')
    .select('*')
}
function createTool(newAntique){
    return knexInstance('tool')
    .insert(newAntique,'*')
    .then((result)=>result[0]);
}
function updateToolAntique(antique){
    return knexInstance('tool')
    .where("id",antique.id)
    .update(antique,'*')
}
// ---------------------------------------------------------------

module.exports = {
    list,
    create,
    read,
    destroyAntique,
    updateAntique,
}