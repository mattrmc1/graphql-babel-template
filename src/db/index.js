import { Schema } from 'jugglingdb';
require('dotenv').config();

const schema = new Schema('mysql', {
    driver: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    timezone: 'utc'
});

export default { schema: schema };
