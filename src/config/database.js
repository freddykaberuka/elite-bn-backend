/* eslint-disable */
const { Sequelize } = require("sequelize");
const db = new Sequelize('postgres://gwrrciew:LlIQ13ud3RF66p5RmK9nCaVJZO3cs9Eq@kandula.db.elephantsql.com:5432/gwrrciew');

try{
    (async()=>{
        await db.sync();
       return console.log("Success, Connected to database");

       
    })
}catch(error){
    console.log("Something went wrong"+error);
}
module.exports = db;

