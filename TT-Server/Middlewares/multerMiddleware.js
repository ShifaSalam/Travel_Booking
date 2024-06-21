const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        console.log(file)
        callback(null,`Img-${Date.now()}-${file.originalname}`)
    }
})

const multerconfig=multer({storage})

module.exports=multerconfig