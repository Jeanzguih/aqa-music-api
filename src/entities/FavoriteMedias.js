const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: "FavoriteMedia",
    tableName: "favoriteMedias",
    columns: {
        favoriteMediaId: {
            primary: true,
            type: "integer",
            generated: true,
        },
    },
    relations: {
        createdBy: {
            target: 'User',
            type: 'many-to-one',
            joinColumn: true,
            onDelete: "CASCADE",
        },
        save: {
            target: 'Media',
            type: 'many-to-one',
            joinColumn: true,
            onDelete: "CASCADE",
        }
    }
})