class UsersService {
  constructor(repository) {
    this.repository = repository;
  }

  async createUser(data) {
    return await this.repository.save(data);
  }

  async authenticateUser(email,password) {
  }
}

module.exports = UsersService;