import express from "express"
import {
    createPatients,
    updatePatients,
    RejectedPatients,
    deletePatients,
    SinglePatient,
    AllPatients,
    ApprovedPatients,
    searchPatients
} from '../Controllers/patientsController.js';


const patientsRoute = express.Router()

// appointments route middlewares ====>
patientsRoute.post('/create', createPatients)
patientsRoute.put('/update/:patientId', updatePatients)
patientsRoute.get('/rejected', RejectedPatients);
patientsRoute.get('/approved', ApprovedPatients);
patientsRoute.delete('/delete/:patientId', deletePatients)
patientsRoute.get('/getSingle/:patientId', SinglePatient)
patientsRoute.get('/find', AllPatients)
patientsRoute.get('/query', searchPatients)


export default patientsRoute