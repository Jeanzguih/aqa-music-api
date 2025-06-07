const express = require('express');
const { AppDataSource } = require('./config/data-source');
const app = express()

app.use(express.json())

AppDataSource.initialize()
    .then(() => console.log("📦Database ready!"))
    .catch((err) => console.error(err));

module.exports = app