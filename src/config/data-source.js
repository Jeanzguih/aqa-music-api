const { DataSource } = require("typeorm");

const Media = require("../entities/Media");
const User = require("../entities/User");
const FavoriteMedias = require("../entities/FavoriteMedias");

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/aqa-music-database.sqlite",
    synchronize: true,
    entities: [User, Media, FavoriteMedias],
});


module.exports = { AppDataSource };