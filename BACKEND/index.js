import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/authRoute.js";
import adminRoute from "./Routes/adminRoute.js";
import invoiceRoute from "./Routes/invoiceRoute.js";
import appointmentsRoute from "./Routes/appointmentsRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import physicianRoute from "./Routes/PhysicianRoute.js";

const app = express();

dotenv.config();

const corsOptions = {
  origin: "*",
};

// Middlewares=====>>>>
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

//Port defined in env if in no one in .env then 8500 is executed.. ====>
const PORT = process.env.PORT || 8500;

// Connect to MongoDB =====>
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Backend Connected");
    })
    .catch((error) => {
      throw error;
    });
};

//Routes =====>>>>
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/invoice", invoiceRoute);
app.use("/api/appointments", appointmentsRoute);
app.use("/api/physicians", physicianRoute)


//Error Middleware ====>
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  const errorStack = err.stack || "No stack trace available";

  console.error("error stack", errorStack);
  console.error("error Message", errorMessage);

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    stack: errorStack,
  });
});

// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on this ${PORT}`);
});
