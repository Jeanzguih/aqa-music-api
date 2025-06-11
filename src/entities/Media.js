const {EntitySchema} = require("typeorm")

module.exports = new EntitySchema ({
    name: "Media",
    columName: "medias" ,
    columns: {
        mediaId: {
            primary: true ,
            type: "integer",
            generated: true,
        },
        createdAt: {
            type:"datetime",
            createDate: true,
        },
        updatedAt:{
            type:"datetime"
        },
        filePath: {
            type: "varchar"
        },
    }
})