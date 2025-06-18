const { Like } = require("typeorm");

class MediaService {
    constructor(repository) {
        this.repository = repository;
    }

    async createMedia(data) {
        return await this.repository.save(data);
    }

    async listMedias() {
        return await this.repository.find();
    }

    async listByGenre(genre) {
        return await this.repository.find({ where: { genre: genre } });
    }


    async listByLikeTitle(title) {
        return await this.repository.find({
            where: {
                title: Like(`%${title}%`)
            }
        })
    }

}

module.exports = MediaService;