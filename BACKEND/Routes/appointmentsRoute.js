import express from "express"
import {
    createAppointments,
    updateAppointments,
    getRejectedAppointments,
    getCompletedAppointments,
    deleteAppointments,
    getSingleAppointments,
    getAllAppointments
} from '../Controllers/appointmentController.js';


const appointmentsRoute = express.Router()

// appointments route middlewares ====>
appointmentsRoute.post('/create', createAppointments)
appointmentsRoute.put('/update/:appointmentId', updateAppointments)
appointmentsRoute.delete('/delete/:appointmentId', deleteAppointments)
appointmentsRoute.get('/getSingle/:appointmentId', getSingleAppointments)
appointmentsRoute.get('/find', getAllAppointments)
appointmentsRoute.get('/rejected', getRejectedAppointments);
appointmentsRoute.get('/completed', getCompletedAppointments);


export default appointmentsRoute