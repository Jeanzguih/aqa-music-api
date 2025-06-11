const { DataSource } = require("typeorm");

const Media = require("../entities/media");

const AppDataSource = new DataSource({
type: "sqlite",
database: "./src/database/aqa-music-database.sqlite",
synchronize: true,
entities: [Media],
});


module.exports = { AppDataSource };