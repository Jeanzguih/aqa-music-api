const { AppDataSource } = require("../config/data-source")
const FavoriteMediaService = require("../services/favoritemedia.service")
const favoriteMediaRepository = AppDataSource.getRepository('favoriteMedias')

const service = new FavoriteMediaService(favoriteMediaRepository)

module.exports = {
    createFavoriteMedias: async (request, response) => {
        try {
            const { mediaId } = request.body

            const favoriteMedia = await service.create({
                createdBy: request.user.id,
                mediaId
            })

            if (!favoriteMedia) {
                return response.status(400).json({ message: "Failed to create favorite media" });
            }


            return response.json(favoriteMedia)

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    listMedia: async (request, response) => {
        const favoriteMedias = await service.listFavoriteMedia();

        return response.json(favoriteMedias)
     },
    upload: async (request, response) => { },
}