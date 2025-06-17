class FavoriteMediaService {
   constructor(repository) {
    this.repository = repository; 
}

  async FavoriteMedias(data) {
    
    return await this.repository.save(data)
  }
}
