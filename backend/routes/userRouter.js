import Express from 'express'
import { signIn, signUp } from '../controllers/userController.js';

const router = Express.Router();

router.post('/signup',signUp);
router.post('/signin',signIn)
export default router