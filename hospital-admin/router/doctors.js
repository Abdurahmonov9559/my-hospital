const { Router } = require("express")
const auth = require('../middleware/auth')
const router = Router()
const Category = require('../model/category')
const Doctor = require('../model/doctors')
const upload = require('../middleware/file')


router.get('/', auth, async(req,res) => {
    let doctors = await Doctor.find().populate('bolim').lean()
    let category = await Category.find().lean()
    res.render('doctors/doctors',{
        isDoctors: true,
        title: `Shifokorlar ro'yxati`,
        category, doctors
    })
}) 

router.post('/', upload.single('img'), async (req,res) => {
    let {ism,bolim} = req.body

    let img = ''
    if(req.file){
        img = req.file.path
    }
    let newDoctor = await new Doctor({ism,bolim,img})
    await newDoctor.save()
    res.redirect('/doctors')
})

router.get('/delete/:id', async(req,res) => {
    let _id = req.params.id
    await Doctor.findByIdAndRemove(_id)
    res.redirect('/doctors')
})
router.post('/edit', async(req,res)=> {
    let {bolim,ism,_id} = req.body
    console.log(req.body)
    await Doctor.findByIdAndUpdate(_id,{ism,bolim})
    res.redirect('/doctors') 
})

router.get('/all',async(req,res)=>{
    let doctors = await Doctor.find().populate('bolim').lean()
    console.log(doctors)
    res.send(doctors)
})


router.get('/:id', async(req,res)=> {
    let _id = req.params.id
    let doctors = await Doctor.findOne({_id}).lean()
    res.send(doctors)
})



module.exports = router