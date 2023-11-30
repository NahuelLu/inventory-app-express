const multer  = require('multer')
const path = require("path")

const fileFilter  = (req, file, cb)  => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)  
    }
}
const storage =  type => { 
    return multer.diskStorage({
        destination: (req,file,cb) =>{
            cb(null,'public/images/'+ type)
        },
        filename: (req,file,cb) =>{
            console.log(file)
            cb(null,Date.now() + path.extname(file.originalname))
        }
    })
}

module.exports = {
    storage,
    fileFilter
}