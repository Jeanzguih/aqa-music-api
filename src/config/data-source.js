const { DataSource } = require("typeorm");

const User = require("../entities/User");

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/aqa-music-database.sqlite",
    synchronize: true,
    entities: [User],
});


module.exports = { AppDataSource };