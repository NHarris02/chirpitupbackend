const express = require('express')
const router = express.Router();
import chirpsRouter from './chirps'


router.use("/chirps", chirpsRouter);

export default router;