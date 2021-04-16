import verifyToken from "../middlewares/verifyToken";
import express from "express";
import users from "../controllers/users.controller";
const router = express.Router();

router.get('/users', users.getAll);
router.post('/register',users.register);
router.post('/login', users.login);
router.get('/logout', users.logout);
router.get('/user/:id', verifyToken,users.getCurrentUser);
router.get('/delete/:id', verifyToken,users.delete);

module.exports = router;