import express from 'express'
import { UserController } from '../controllers/index.js';
const UserRouter = express.Router();
UserRouter.post('/register', UserController.register)
export default UserRouter