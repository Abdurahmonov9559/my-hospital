module.exports = (req,res,next) =>{
    if (!req.session.isAuthed){
        res.redirect('/users/login')
    }
    next()
}