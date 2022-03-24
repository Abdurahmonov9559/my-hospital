const {Router} = require('express')
const auth = require('../middleware/auth')
const router = Router()
const Category = require('../model/category')

router.get('/',auth,async(req,res)=>{
    let category = await Category.find().lean()
    category = category.map(cate=> {
        cate.date = cate.date.toLocaleTimeString()
        ++cate.nomer
        return cate
    })
    res.render('category/index',{
        isCategory:true,
        title:'Bo`limlar ro`yhati',
        category
    })
})

router.post('/', async(req,res) => {
    let {bolim} = req.body
    let newCategory = await new Category({bolim})
    await newCategory.save()
    res.redirect('/category')
})

router.get('/all', async(req,res) =>{
    let category = await Category.find().lean()
    res.send(category)
})

router.get('/delete/:id', async(req,res) => {
    let _id = req.params.id
    await Category.findByIdAndRemove(_id)
    res.redirect('/category') 
})

router.get('/:id', async(req,res)=> {
    let _id = req.params.id
    let category = await Category.findOne({_id}).lean()
    res.send(category)
})

router.post('/edit', async(req,res)=> {
    let {bolim,_id} = req.body
    await Category.findByIdAndUpdate(_id,{bolim})
    res.redirect('/category') 
}) 

module.exports = router 

