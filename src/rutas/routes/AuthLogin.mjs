import express from 'express';
import {AuthController} from '../../middlewares/auth.mjs'

export const authRouter = express.Router();

// POST ----------------------------
// /api/v1/auth/login
authRouter.post(
  '/login',
  AuthController.generateAccessToken
);