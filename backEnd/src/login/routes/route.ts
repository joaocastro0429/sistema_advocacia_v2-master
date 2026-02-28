import { Router } from 'express';
import { RegisterController } from '../controllers/register';
import { loginController } from '../controllers/login';
import { forgotPasswordController } from '../controllers/forgot-password';
import { authMiddleware } from '../middlewares/auth.middleware';

export const loginRouter = Router();

loginRouter.post('/register', RegisterController)
loginRouter.post('/login', loginController)
loginRouter.post('/forgot-password', forgotPasswordController)

loginRouter.get('/protected', authMiddleware, (req, res) => {
    return res.json({
      message: 'Rota protegida acessada',
    })
  })
