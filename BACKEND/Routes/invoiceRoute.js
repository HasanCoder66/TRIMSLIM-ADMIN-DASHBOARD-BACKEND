import express from "express";
import {
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoice,
  getAllInvoice,
  getPendingInvoices,
  getCompletedInvoices,
} from "../Controllers/invoiceController.js";
import { verifyInvoiceAdmin, verifyToken } from "../Utils/verifyToken.js";
const invoiceRoute = express.Router();

invoiceRoute.post("/create", verifyToken, verifyInvoiceAdmin, createInvoice);
invoiceRoute.put("/update/:invoiceId", verifyInvoiceAdmin, updateInvoice);
invoiceRoute.delete("/delete/:invoiceId", verifyInvoiceAdmin, deleteInvoice);
invoiceRoute.get("/getSingle/:invoiceId", verifyInvoiceAdmin, getInvoice);
invoiceRoute.get("/find", verifyInvoiceAdmin, getAllInvoice);
invoiceRoute.get("/pending", verifyInvoiceAdmin, getPendingInvoices);
invoiceRoute.get("/completed", verifyInvoiceAdmin, getCompletedInvoices);

export default invoiceRoute;
