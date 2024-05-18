import express from "express";
import {
  createAppointments,
  updateAppointments,
  getRejectedAppointments,
  getCompletedAppointments,
  deleteAppointments,
  getSingleAppointments,
  getAllAppointments,
} from "../Controllers/appointmentController.js";
import { verifyAppointmentAdmin, verifyToken } from "../Utils/verifyToken.js";

const appointmentsRoute = express.Router();

// appointments route middlewares ====>
appointmentsRoute.post("/create",verifyToken, verifyAppointmentAdmin, createAppointments);
appointmentsRoute.put(
  "/update/:appointmentId",
  verifyAppointmentAdmin,
  updateAppointments
);
appointmentsRoute.delete(
  "/delete/:appointmentId",
  verifyAppointmentAdmin,
  deleteAppointments
);
appointmentsRoute.get(
  "/getSingle/:appointmentId",
  verifyAppointmentAdmin,
  getSingleAppointments
);
appointmentsRoute.get("/find", verifyAppointmentAdmin, getAllAppointments);
appointmentsRoute.get(
  "/rejected",
  verifyAppointmentAdmin,
  getRejectedAppointments
);
appointmentsRoute.get(
  "/completed",
  verifyAppointmentAdmin,
  getCompletedAppointments
);

export default appointmentsRoute;
