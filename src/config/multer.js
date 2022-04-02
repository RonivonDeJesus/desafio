process.env.BUCKETconst multer = require('multer')
const path = require('path')
const AWS = require('aws-sdk')
const multerS3 = require('multer-s3')
const crypto = require('crypto')


const storageTypes = {
    
    s3: multerS3({
        s3: new AWS.S3(),
        bucket: process.env.BUCKET,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) {
                    callback(err)
                }
                
                const fileName = file.originalname

                callback(null, fileName)
            })
        },
    })
}



module.exports = {storage: storageTypes['s3']}
