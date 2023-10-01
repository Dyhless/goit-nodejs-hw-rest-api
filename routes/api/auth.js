const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewares");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

// authenticate
// router.get("/current", authenticate, ctrl.getCurrent);

// router.post("/logout", authenticate, ctrl.logout);

// router.patch("/subscription", authenticate, ctrl.updateSubscription);

module.exports = router;