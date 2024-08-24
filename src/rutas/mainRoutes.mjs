import express from 'express';
import { authRouter } from './routes/AuthLogin.mjs';

export const mainRouters = express.Router();

mainRouters.use('/auth', authRouter);
