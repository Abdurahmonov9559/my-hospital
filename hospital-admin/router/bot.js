const {Router} = require('express')
const router = Router()
const Category = require('../model/category')

const TelegramBot = require('node-telegram-bot-api');
const token = '5176258976:AAHgqIrBZANmFBppoxBj2llZHNdUhXWs9M8';

const bot = new TelegramBot(token, {polling: true});

let mainMenu = {
    reply_markup: {
        one_time_keyboard:true,
        resize_keyboard:true,
        keyboard: [
            ['🏥 bo`limlar', '👨‍⚕️ shifokorlar'],
            ['📰 yangiliklar', '❓savol-javoblar']
        ]
    }
}

bot.onText(/\/start/,async (msg)=> {
    const {id} = msg.chat
    let category = await Category.find().lean()
    bot.sendMessage(id,'Szga qanday yordama bera olamiz?',mainMenu)
})

bot.on('message',async(msg)=>{
    const {id} = msg.chat
    const {text} = msg
    switch(text) {
        case '🏥 bo`limlar':
            let category = await Category.find().lean()
            let catyKeys = []
            let littleCat = []
            let maxCat = 3
            category.forEach(cat => {
                littleCat.push({
                    text: cat.bolim,
                    callback_data: cat._id
                })
                if(maxCat == littleCat.length){
                    catyKeys.push(littleCat)
                    littleCat = []
                }
            })
            if(littleCat.length > 0){
                catyKeys.push(littleCat)
            }
            bot.sendMessage(id,'bo`limlar',{
                reply_markup: {
                    inline_keyboard: catyKeys
                }
            })
        break;
        case '/start':
            break
        default:
            bot.sendMessage(id,'Szga qanday yordama bera olamiz?',mainMenu)
            break;
    }
})



router.get('/', (req,res) => {
    res.render('index')
})



module.exports = router