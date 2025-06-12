const UsersService = require("../services/users.services")

module.exports = {
     createUser: async (request, response ) => {
        try{
        const {phone, nickname, name, password, email} = request.body

        const user = await UsersService.createUser({
            phone,
            nickname,
            name,
            password,
            email,
        })

        return response.json(user)
    } catch (error) {
        response.status(500).json({ message: error.message});
    }

    },
    authenticateUser: async (request, response ) => {},
}