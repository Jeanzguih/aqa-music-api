const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: "Media",
    columName: "medias",
    columns: {
        mediaId: {
            primary: true,
            type: "integer",
            generated: true,
        },
        createdAt: {
            type: "datetime",
            createDate: true,
        },
        updatedAt: {
            type: "datetime"
        },
        filePath: {
            type: "varchar"
        },
        duration: {
            type: "varchar"
        },
        description: {
            type: "varchar"
        },
        title: {
            type: "varchar"
        },
        imagePath: {
            type: "varchar"
        },
        genre: {
            type: "varchar"
        }
    },
    relations: {
        createdBy: {
            target: 'User',
            type: 'one-to-one',
            joinColumn: true,
            onDelete: "CASCADE",
        }
    }
})