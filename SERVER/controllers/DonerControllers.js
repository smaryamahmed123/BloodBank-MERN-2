// controllers/donorController.js

import Donor from "../module/DonerSchema.js";
import validator from "validator";

export const getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addDonor = async (req, res) => {
    const { name, bloodGroup, contactInfo, messagess } = req.body;

    // Validate phone number format
    if (!validator.isMobilePhone(contactInfo, 'any')) {
        return res.status(400).json({ valid: false, message: 'Invalid phone number format.' });
    }

    // Create new donor
    const donor = new Donor({ name, bloodGroup, contactInfo, messagess });

    try {
        const newDonor = await donor.save();
        res.status(201).json(newDonor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
