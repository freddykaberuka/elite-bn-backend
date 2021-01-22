/*eslint-disable */
const fs = require('fs');

export const  fcn = ()=>{
    const testFolder = process.cwd() + "/src/services/template/verifyEmail.html";
    const fs = require('fs');
    
    fs.readFile(testFolder, 'utf8', (error, data)=>{
        console.log(data);
    })
}
module.exports = fcn;