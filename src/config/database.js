/* eslint-disable */
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DB_PATH);

try {
    (async () => {
        await db.sync({
            force: false
        });
    })();
} catch (error) {
    console.log("Something went wrong" + error);
}
module.exports = db;