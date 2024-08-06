import Applications from "../models/applications.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await Applications.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
