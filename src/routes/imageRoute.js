const Router = require('express').Router
const uploadService = require('../services/uploadImageService')
const multer = require('multer')
const configMulter = require('../config/multer').storage
const routes = Router()

const upload = multer({storage: configMulter})

routes.post('/upload', upload.single('file'), (req, res) =>{
    uploadService.uploadImage(req, res, req.file)
})

module.exports = routes

