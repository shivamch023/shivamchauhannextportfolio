import mongoose from 'mongoose'

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://shivamportfolio:shivamchauhan123456@cluster0.0n1qh.mongodb.net/shivam-portfolio')


    console.log("DB Connected")
}