const jimp = require('../utils/jimp')
const ImageRepository = require('../repository/ImageRepository')
const AWS = require('aws-sdk')

class UploadImageService{
    async uploadImage(req, res, file){
        if(file == null){
            return res.json('A imagem é obrigatória')
        }
        if(req.body.classification == null){
            this.removeImage(file)
            return res.json('A classificação é obrigatória')
        }
        
        const classif = req.body.classification.toLowerCase()
        
        if(classif != 'objeto' && classif != 'pessoa' && classif != 'paisagem' && classif != 'animal'){
            this.removeImage(file)
            return res.json('Classificação não suportada')
        } else {
            await jimp(file.location).then(result =>{
                if (result == null || result == false){
                    this.removeImage(file.originalname)
                    return res.json("Essa imagem já foi salva") 
                } 
                else{
                    const save = ImageRepository.save(req, file, result)
                    if(save != null || save != undefined){
                        return res.json("Imagem salva")                        
                    }                
                } 
            })

        }
    }
    removeImage(file){
        const s3 = new AWS.S3()
        s3.deleteObject({
            Bucket: 'roni-desafio',
            Key: file.originalname
        })
    }
}

module.exports = new UploadImageService