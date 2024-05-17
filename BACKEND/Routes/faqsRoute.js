import express from "express";
import {
  createFaqs,
  updateFaqs,
  deleteFaqs,
  getFaqs,
  getAllFaqs,
  searchFaqs
} from "../Controllers/faqsController.js";
const faqsRoute = express.Router();

// http://{domain-name}/api/faqs/create
faqsRoute.post("/create", createFaqs);

// http://{domain-name}/api/faqs/:faqId
faqsRoute.put("/update/:faqsId", updateFaqs);

// http://{domain-name}/api/faqs/:faqId
faqsRoute.delete("/delete/:faqsId", deleteFaqs);

// http://{domain-name}/api/faqs/:faqId
faqsRoute.get("/getSingleFaqs/:faqsId", getFaqs);

// http://{domain-name}/api/faqs/find
faqsRoute.get("/find", getAllFaqs);

// http://{domain-name}/api/faqs/query
faqsRoute.get("/query", searchFaqs);

export default faqsRoute;
