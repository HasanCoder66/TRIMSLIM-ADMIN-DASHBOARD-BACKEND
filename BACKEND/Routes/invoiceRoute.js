import express from "express"
import { createInvoice, updateInvoice, deleteInvoice, getInvoice, getAllInvoice, getPendingInvoices, getCompletedInvoices } from '../Controllers/invoiceController.js';
const invoiceRoute = express.Router()

invoiceRoute.post('/create', createInvoice)
invoiceRoute.put('/update/:invoiceId', updateInvoice)
invoiceRoute.delete('/delete/:invoiceId', deleteInvoice)
invoiceRoute.get('/getSingle/:invoiceId', getInvoice)
invoiceRoute.get('/find', getAllInvoice)
invoiceRoute.get('/pending', getPendingInvoices);
invoiceRoute.get('/completed', getCompletedInvoices);


export default invoiceRoute