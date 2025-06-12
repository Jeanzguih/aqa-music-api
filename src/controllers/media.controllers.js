const MediaService = require("../services/media.services");

module.exports = {
    createMedia: async (request, response) => {
        try {
            const { duration, description, title, genre } = request.body

            const media = await MediaService.createMedia({
                filePath: request.file.path,
                imagePath: request.image.path,
                duration,
                description,
                title,
                genre,
            })

            return response.json(media)

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    listMedia: async (request, response) => { },
    upload: async (request, response) => { },
}