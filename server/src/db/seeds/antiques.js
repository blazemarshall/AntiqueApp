/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('antiques').truncate()
  await knex('antiques').insert([
    {
    id: 1,
    quantity:"1",
    name:"Victrola Record Player",
    category:"Entertainment",
    value:"?",
    material:"wood",
    color:"wood",
    style:"Art Nou Veau",
    brand:"Victor",
    model:"?",
    timePeriod:"early 20th",
    condition:"excellent",
    origin:"?",
    purpose:"Plays records.",
    owner:"?",
    history:"?",
    size:"standup Cabinet",
    comment:"?"
},
{
      id: 2,
      quantity:"2",
      name:"ladder back Chairs",
      category:"chair",
      value:"?",
      material:"wood",
      color:"wood",
      style:"ladder back,rush seat",
      brand:"?",
      model:"?",
      timePeriod:"1790s",
      condition:"very good",
      origin:"?",
      purpose:"?",
      owner:"?",
      history:"?",
      size:"?",
      comment:"One of the chairs has a missing leg bar."
},
  ]);
};
