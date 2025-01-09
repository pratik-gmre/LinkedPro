import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose'
const URl = process.env.MONGODB
export  const connectToMongo = async()=>{ 
try{
await mongoose.connect(URl)
console.log('Connect to db')
} catch(error){
console.log('db error',error)
process.exit(1)
}
}