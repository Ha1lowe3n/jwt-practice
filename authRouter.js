const Router = require("express");
const { check } = require("express-validator");

const controller = require("./authController.js");
// const authMiddleware = require("./middleware/authMiddleware");
const roleMiddlewareCreator = require("./middleware/roleMiddleware");

const router = new Router();

router.post(
    "/registration",
    [
        check("username", "Имя пользователя не может быть пустым").notEmpty(),
        check(
            "password",
            "Пароль должен быть больше 4 и меньше 10 символов"
        ).isLength({ min: 4, max: 10 }),
    ],
    controller.registration
);
router.post("/login", controller.login);
router.get("/users", roleMiddlewareCreator(["ADMIN"]), controller.getUsers);

module.exports = router;
