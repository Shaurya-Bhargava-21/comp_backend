import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import {app} from './app.js'
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log('server is running on port ', process.env.PORT);  
    })
})
.catch((error)=>{
    console.log('MONGODB connection failed', error);
    
})





/*
// first approach to connect db
// import { DB_NAME } from "./constants.js";
import express from express;
const app = express();

//  a good approach to connect to db is using IIFE (immediately invoked function expression)
// syntax 
// (function(){
//   logic here
// }())

(async ()=>{
    try{      
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("err",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log("app is listening on port ", process.env.PORT);
        })
    }
    catch(error){
      console.log("ERROR",error);
        throw error;
    }
})()
*/