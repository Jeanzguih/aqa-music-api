const MediaService = require("../services/media.services")
const { AppDataSource } = require("../config/data-source")
const FavoriteMedias = require("../entities/FavoriteMedias")
const mediaRepository = AppDataSource.getRepository('Media')

const service = new MediaService(mediaRepository)

module.exports = {
    createFavoriteMedia: async (request, response) => {
        try {
            const {mediaId} = request.body

            

            return response.json(media)

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    listMedia: async (request, response) => { },
    upload: async (request, response) => { },
}