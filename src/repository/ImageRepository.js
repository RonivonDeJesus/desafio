const Image = require('../models/image')

class ImageRepository{
    async getHash(hashImage){
        const result = await Image.findOne({
            hash: hashImage
        })
        return result
    }
    async save(req, file, result){
        const imagesave = Image.create({
            url: file.location,
            hash: result.hash(),
            classification: req.body.classification.toLowerCase()
        })
        return imagesave

    }
}
module.exports = new ImageRepository