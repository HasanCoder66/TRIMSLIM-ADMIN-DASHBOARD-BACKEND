import express from "express"
import { createService, deleteService, getAllServices, getSingleService, searchService, updateService } from "../Controllers/serviceController.js"
const servicesRoute = express.Router()

// http://{domain-name}/api/services/create
servicesRoute.post('/create', createService)

// http://{domain-name}/api/services/:serviceId
servicesRoute.put('/:serviceId', updateService)

// http://{domain-name}/api/services/:serviceId
servicesRoute.delete('/:serviceId', deleteService)

// http://{domain-name}/api/services/:serviceId
servicesRoute.get('/:serviceId', getSingleService)

// http://{domain-name}/api/services/
servicesRoute.get('/', getAllServices)

// http://{domain-name}/api/services/
servicesRoute.get('/find/query', searchService)


export default servicesRoute