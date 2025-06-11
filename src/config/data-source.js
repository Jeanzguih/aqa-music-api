const { DataSource } = require("typeorm");

const Media = require("../entities/media");
const User = require("../entities/User");

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/aqa-music-database.sqlite",
    synchronize: true,
    entities: [User,Media],
});


module.exports = { AppDataSource };