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
        }
    }
})
