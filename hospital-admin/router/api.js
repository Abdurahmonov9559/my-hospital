const {Router} = require('express')
const router = Router()

const Category = require('../model/category')
const Doctor = require('../model/doctors')

router.get('/', async (req,res) => {
    let doctors = await Doctor.find().lean()
    let category = await Category.find().lean()
    res.render('/',{
        category, doctors
    })
})



module.exports = router