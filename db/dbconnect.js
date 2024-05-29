import mongoose, { modelNames } from "mongoose";

const dbconnect = ()=>{
    const connectionParams = {useNewUrlParser:true}
    mongoose.connect(process.env.dbconnect , connectionParams);
     

    mongoose.connection.io('connected' , ()=>{
        console.log('connected to db')
    })

    mongoose.connection.io('error' , ()=>{
        console.log('error in connecting database')
    })

    mongoose.connection.io('disconnected' , ()=>{
        console.log('disconnected to db')
    })
}


export default dbconnect;