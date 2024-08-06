import express from "express";
import {

    getCustomers,

} from "../controllers/client.js";
import Applications from "../models/applications.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.delete("/applications/:id", async (req, res) => {
    try {
        const deletedApplication = await Applications.findByIdAndDelete(req.params.id);
        if (!deletedApplication) {
            return res.status(404).json({ message: "Application not found" });
        }
        res.status(200).json({ message: "Application deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
