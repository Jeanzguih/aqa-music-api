const MediaService = require("../services/media.services")
const { AppDataSource } = require("../config/data-source")
const FavoriteMedias = require("../entities/FavoriteMedias")
const mediaRepository = AppDataSource.getRepository('Media')

const service = new MediaService(mediaRepository)

module.exports = {
    FavoriteMedias: async (request, response) => {
        try {
            const {MediaId} = request.body

            const audioFile = request.files["audio"]?.[0]
            const coverFile = request.files["cover"]?.[0]

            if (!audioFile)
                return response.status(400).json({ message: "Audio file is required." });

            return response.json(media)

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    listMedia: async (request, response) => { },
    upload: async (request, response) => { },
}