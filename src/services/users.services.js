class UsersService {
  constructor(repository) {
    this.repository = repository;
  }

  async createUser(data) {
    return await this.repository.save(data);
  }

  async getUserByEmail(email) {
    return await this.repository.findOneBy({ email });
  }
}

module.exports = UsersService;