const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: 'User',
    columnName: 'users',
    columns: {
        userId: {
            primary: true,
            type: 'integer',
            generated: true
        },
        name: {
            type: 'varchar'
        },
        createdAt: {
            type: "datetime",
            createDate: true,
        },
        updatedAt: {
            type: "datetime",
        },
        phone: {
            type: 'varchar'
        },
        nickname: {
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
    },
    relations: {
        createdAt: {
            target: 'Media',
            type: 'one-to-many',
            joinColumn: true,
            onDelete: "CASCADE",
        },
    
    }
})
