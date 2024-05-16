import express from "express";

import {
  updatePhysician,
  deletePhysician,
  getAllPhysicians,
  createPhysician,
  searchPhysician
//   getPhysician,
//   getPhysicians,
} from "../Controllers/physicianController.js";

const physicianRoute = express.Router();

physicianRoute.get("/find", getAllPhysicians)
physicianRoute.put("/update/:physicianId", updatePhysician);
physicianRoute.post("/create", createPhysician);
physicianRoute.delete("/delete/:physicianId", deletePhysician);
physicianRoute.get("/search", searchPhysician);

export default physicianRoute;