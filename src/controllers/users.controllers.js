const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const UsersService = require("../services/users.services")
const { AppDataSource } = require("../config/data-source")
const userRepository = AppDataSource.getRepository('User')

const service = new UsersService(userRepository)

module.exports = {
    createUser: async (request, response) => {
        try {
            const { phone, nickname, name, password, email } = request.body

             const existUser = await service.getUserByEmail(email);

            if (existUser) return response.status(400).json({ message: 'User exists' })

            const encrypted = CryptoJS.SHA256(password).toString();

            const user = await service.createUser({
                phone,
                nickname,
                name,
                password: encrypted,
                email,
                updatedAt: new Date(),
            })

            const token = jwt.sign({ id: user.id }, "Jean careca e Leonardo cabelo de miojo", {
                expiresIn: "7d",
            });

            return response.json({ user, token })
        } catch (error) {
            response.status(500).json({ message: error.message });
        }


    },
    authenticateUser: async (request, response) => {
        try {
            const { email, password } = request.body;
            const encrypted = CryptoJS.SHA256(password).toString();

            const user = await service.getUserByEmail(email);

            if (!user) return response.status(400).json({ message: 'User not found' })

            if (encrypted !== user.password) return response.status(400).json({ message: 'Invalid password' })

            const token = jwt.sign({ id: user.id }, "Jean careca e Leonardo cabelo de miojo", {
                expiresIn: "7d",
            });

            return response.json({ user, token })

        } catch (error) {
            response.status(500).json({ message: error.message });
        }


    },
}