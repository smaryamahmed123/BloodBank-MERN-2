// routes/donorRoutes.js

import express from'express'
import { addDonor, getAllDonors } from '../controllers/DonerControllers.js';
const DonerRouter = express.Router()

// Get all donors
DonerRouter.route('/doner').get(getAllDonors);

// Add a new donor
DonerRouter.route('/doner').post(addDonor);

export default DonerRouter;
