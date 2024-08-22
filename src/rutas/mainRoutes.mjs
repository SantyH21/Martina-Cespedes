import express from 'express';
import { authRouter } from './routes/AuthLogin.mjs';

export const mainRouter = express.Router();

mainRouters.use('/auth', authRouter);
