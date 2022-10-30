//

//----------------------------property validation ------------------------------

// ValidProperties list to insert into validPropertiesChecker for correct response from db
 const validProperties = [
    "name",
    "category",
    "quantity",
    "value",
    "material",
    "color",
    "style",
    "brand",
    "model",
    "timePeriod",
    "condition",
    "origin",
    "purpose",
    "owner",
    "history",
    "size",
    "comment",
];

//checks response from db 
 function hasOnlyValidProperties(req,res,next){
    const {data={}}=req.body;
    const invalidFields= Object.keys(data).filter(
        (field)=>!validProperties.includes(field)
    );
    if(invalidFields.length){
        return next({
            status:400,
            message:`Invalid field(s): ${invalidFields.join(', ')}`,
        });
    }
    next();
}


// name
//is a string


//category

//value
//is a number

//material

//color

//style

// brand

// model

// timePeriod

//condition

//origin

//purpose

//owner

//history

//size

module.export = middleware;