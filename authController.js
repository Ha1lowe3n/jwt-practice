const User = require("./models/User");
const Role = require("./models/Role");

class authController {
    async registration(req, res) {
        try {
            const { username, password } = req.body;
            const candidate = await User.findOne(username);
            console.log(candidate);
            if (candidate) {
                return res.status(400).json({
                    message: "Пользователь с таким именем уже существует",
                });
            }
            const user = new User({});
        } catch (e) {
            console.error(e);
            res.status(400).json({ message: "Registration error" });
        }
    }

    async login(req, res) {
        try {
        } catch (e) {
            console.error(e);
            res.status(400).json({ message: "Login error" });
        }
    }

    async getUsers(req, res) {
        try {
            res.json("server is work");
        } catch (e) {}
    }
}

module.exports = new authController();
