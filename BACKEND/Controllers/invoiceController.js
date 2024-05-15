import InvoicesModel from "../Models/InvoicesModel.js"

export const createInvoice = async (req, res, next) => {
    try {
        const createInvoices = await new InvoicesModel(
            {
                ...req.body
            }
        )

        const saveInvoices = await createInvoices.save()

        res.status(200).json({
            status: "success",
            message: 'created invoices successfully',
            data: saveInvoices
        })
    } catch (error) {
        // createError(error.status, error.message)
        next(error)
    }
}


export const updateInvoice = async (req, res, next) => {
    try {
        const invoiceId = req.params.invoiceId
        // console.log(invoiceId)
        const updateInvoices = await InvoicesModel.findByIdAndUpdate(invoiceId, { $set: req.body }, { new: true })

        // console.log(updateInvoices)
        res.status(200).json({
            status: "success",
            message: 'update invoice successfully',
            data: updateInvoices
        })
    } catch (error) {
        next(error)
    }
}



export const deleteInvoice = async (req, res, next) => {
    try {
        const invoiceId = req.params.invoiceId
        await InvoicesModel.findByIdAndDelete(invoiceId)
        res.status(200).json({
            status: "success",
            message: 'Delete invoice successfully',
        })
    } catch (error) {
        next(error)
    }
}


export const getInvoice = async (req, res, next) => {
    try {
        const invoiceId = req.params.invoiceId
        const invoice = await InvoicesModel.findById(invoiceId)
        res.status(200).json({
            status: "success",
            message: 'found invoice successfully',
            data: invoice
        })
    } catch (error) {
        next(error)
    }
}




export const getAllInvoice = async (req, res, next) => {
    try {
        const allInvoice = await InvoicesModel.find()
        res.status(200).json({
            status: "success",
            message: 'found all invoice successfully',
            data: allInvoice
        })
    } catch (error) {
        next(error)
    }
}


