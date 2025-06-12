class MediaService {
    constructor(repository) {
        this.repository = repository;
    }

    async createMedia(data) {
        return await this.repository.save(data);
    }

    async listMedia() {
    }
    
    async upload() {
    }
    
}

module.exports = MediaService;