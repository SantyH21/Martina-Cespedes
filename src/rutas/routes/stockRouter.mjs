import express from 'express';
import {GetController} from '../../queries_db/gets/getsHttp/gets.mjs'

export const stockRouter = express.Router();

// GET ----------------------------

stockRouter.get('/', GetController.getAllRecordsStock);
