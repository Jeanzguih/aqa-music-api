class FavoriteMediaService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {

    return await this.repository.save(data)
  }
}

module.exports = FavoriteMediaService;