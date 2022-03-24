const {Router} = require('express')
const router = Router()
const Users = require('../model/user')
const bcrypt = require('bcryptjs')
router.get('/login',async(req,res)=>{
    res.render('users/login',{
        title:'Tizimga kirish',
        layout:'no-head',
        success: req.flash('success'),
        error: req.flash('error'),
    })
})
router.get('/logout',async(req,res)=>{
    req.session.destroy(()=>[
        res.redirect('/users/login')
    ])
})
router.post('/login',async(req,res)=>{
    let {login,password} = req.body
    let checkUser = await Users.findOne({login}).lean()
    if (checkUser){
        let comparePass = await bcrypt.compare(password,checkUser.password)
        console.log(comparePass)
        if (comparePass) {
            req.session.isAuthed = true
            req.session.user = checkUser
            req.flash('success','Tizimga kirdingiz')
            res.redirect('/')
        } else {
            req.flash('error','Parol notogri')
            res.redirect('/users/login')
        }
    } else {
        res.redirect('/users/login?msg=1')
    }

})

router.get('/check/:login',async(req,res)=>{
    let login = req.params.login
    let checkLogin = await Users.findOne({login})
    if (checkLogin){
        res.send(true)
    } else {
        res.send(false)
    }
})

router.get('/reg',async(req,res)=>{
    res.render('users/reg',{
        layout:'no-head',
        title:'Ro`yhatdan o`tish',
    })
})
router.post('/reg',async(req,res)=>{
    let {login,password,name} = req.body
    const checkUser = await Users.findOne({login}).lean()
    if (checkUser){
        req.flash('error','Bunday foydalanuvchi mavjud!')
        res.redirect('/users/reg')
    } else {
        let hashpass = await bcrypt.hash(password,6)
        let user = await new Users({login,password:hashpass,name})
        await user.save()
        res.redirect('/users/login')
    }
})

module.exports = router