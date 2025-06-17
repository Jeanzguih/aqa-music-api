const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: "FavoriteMedias",
    columName: "favoriteMedias",
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
            type: 'one-to-one',
            joinColumn: true,
            onDelete: "CASCADE",
        },
        save: {
            target: 'Media',
            type: 'one-to-one',
            joinColumn: true,
        }
    }
})