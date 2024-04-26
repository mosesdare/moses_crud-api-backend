import express from "express"
import mongoose from "mongoose"
import {PORT, mongoURL} from "./config.js"
import  { Product } from "./models/products.model.js"
import productRoute  from "./routes/products.routes.js"

//Declaring the app
const app = express();

//For app to display JSON files
app.use(express.json())

// // To allow the app accept http request in the form format
// app.use(express.urlencoded({extended:false}))

// The routes for the products
app.use('/api/products', productRoute)

//Connect to the database
try{
    mongoose.connect(mongoURL)
    console.log("Database connected successfully");
    app.listen(PORT,()=>{
        console.log(`app is running on port ${PORT}`)
    });
    
}catch(err){
    console.log("The database did not connect nigga", err)
};

//Another way of connecting to the mongodb server
// mongoose.connect("mongodb://localhost:27017/")
// .then(()=>{
//     console.log("Database connected successfully");
//     app.listen(5000,()=>{
//         console.log('app is running on port 5000')
//     });
    
    
// })
// .catch((err)=>{
//     console.log("The database did not connect nigga", err)
// });

