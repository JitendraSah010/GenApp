import express from 'express';
import {home, register, login, verifyUser} from '../controllers/auth_controller.js';
import auth_middleware from '../middleware/auth_middleware.js';
import registrationValidator from '../form validators/registrationValidator.js';
import loginValidator from '../form validators/loginValidator.js';
import verifyUserMiddleware from '../middleware/verifyUser-middleware.js';

const router = express.Router();

    
router.get('/', home );
router.post('/register', auth_middleware(registrationValidator),  register);
router.post('/login', auth_middleware(loginValidator), login);
router.get('/user',verifyUserMiddleware, verifyUser);


export default router;
