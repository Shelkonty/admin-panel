import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
    {
        name: String,
        phone: String,
        description: String,
        type: String,
        contact: String,
    },
    { collection: 'applications' }
);

const Applications = mongoose.model("Applications", ApplicationSchema);
export default Applications;