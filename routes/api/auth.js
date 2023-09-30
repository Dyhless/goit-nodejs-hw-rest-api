const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewares/validateBody");

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post("/login",validateBody(schemas.loginSchema), ctrl.login)

module.exports = router;