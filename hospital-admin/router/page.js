const {Router} = require('express')
const router = Router()
const auth = require('../middleware/auth')
const Category = require('../model/category')
const Doctor = require('../model/doctors')


router.get('/',async(req,res)=>{
    let category = await Category.find().lean()
    let doctors = await Doctor.find().lean()
    res.render('page/index',{
        title: 'Bosh sahifa',
        isHome:true,
        category,
        doctors
    })
})

router.get('/about',(req,res)=>{
    res.render('page/about')
})

module.exports = router