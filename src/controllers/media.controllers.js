const MediaService = require("../services/media.services")
const { AppDataSource } = require("../config/data-source")
const mediaRepository = AppDataSource.getRepository('Media')

const service = new MediaService(mediaRepository)

module.exports = {
    createMedia: async (request, response) => {
        try {
            const { duration, description, title, genre } = request.body

            const audioFile = request.files["audio"]?.[0]
            const coverFile = request.files["cover"]?.[0]

            if (!audioFile)
                return response.status(400).json({ message: "Audio file is required." });

            const media = await service.createMedia({
                duration,
                description,
                title,
                genre,
                filePath: audioFile.path,
                imagePath: coverFile.path,
                updatedAt: new Date(),
                createdByUserId: 1
            })

            return response.json(media)

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    listMedia: async (request, response) => { },
    upload: async (request, response) => { },
}