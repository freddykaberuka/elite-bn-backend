const bcrypt = require('bcrypt');
const hashedPassword = '$2b$10$5bVBlFQxpo3.laIrak8wFuRk5RkfkmLd5N1EuHVTlLFUto/eEoGqe';

(async()=>{
    const comp = await bcrypt.hash('admin1234', 10,(err, res)=>{
        console.log(res);
    })

})();
