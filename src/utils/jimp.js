const jimp = require('jimp')
const repository = require('../repository/ImageRepository')

const compareImages = async (file)=>{
    const readFile = await jimp.read(file)
    
    //hash
    const readFileHash = readFile.hash()

    const file2 = await repository.getHash(readFileHash)
    if(file2 == null){
        return readFile
    } 

}


module.exports = compareImages 