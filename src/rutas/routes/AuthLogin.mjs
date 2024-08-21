import express from 'express';
import {auth} from '../../middlewares/auth.mjs'

export const authRouter = express.Router();

// POST ----------------------------
// /api/v1/auth/login
authRouter.post(
    '/login',
    (req, res, next) => (req, res, next),
   
  );
  