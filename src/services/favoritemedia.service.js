class FavoriteMediaService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    return await this.repository.save(data)
  }

  async listFavoriteMedia() {
    return await this.repository.find()
  }
}

module.exports = FavoriteMediaService;