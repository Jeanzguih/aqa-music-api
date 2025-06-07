const { DataSource } = require("typeorm");


const AppDataSource = new DataSource({
type: "sqlite",
database: "./src/database/aqa-music-database.sqlite",
synchronize: true,
entities: [],
});


module.exports = { AppDataSource };