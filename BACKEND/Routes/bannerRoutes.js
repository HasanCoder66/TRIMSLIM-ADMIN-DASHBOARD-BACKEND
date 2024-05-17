import express from "express"
import { createBanner, deleteBanner, getAllBanners, getSingleBanner, updateBanner } from "../Controllers/bannerController.js"

const bannerRoute = express.Router()

// http://{domain-name}/api/banner/create
bannerRoute.post('/create', createBanner)

// http://{domain-name}/api/banner/:bannerId
bannerRoute.put('/:bannerId', updateBanner)

// http://{domain-name}/api/banner/:bannerId
bannerRoute.delete('/:bannerId', deleteBanner)

// http://{domain-name}/api/banner/:bannerId
bannerRoute.get('/:bannerId', getSingleBanner)

// http://{domain-name}/api/banner/
bannerRoute.get('/', getAllBanners)


export default bannerRoute