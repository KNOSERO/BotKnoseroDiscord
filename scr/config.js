require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;
const MONGODB = process.env.MONGODB;
const CLIENTID = process.env.CLIENTID;
const GUILDID = process.env.GUILDID;
const ADMINID = process.env.ADMINID; 

module.exports = {
    TOKEN,
    PREFIX,
    MONGODB,
    CLIENTID,
    GUILDID,
    ADMINID,
}