const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products.model');
const productRoute = require('./controller/products.controller');

//Declaring the app
const app = express();

//For app to display JSON files
app.use(express.json())

// To allow the app accept http request in the form format
app.use(express.urlencoded({extended:false}))

// The routes for the products
app.use('/api/products', productRoute)


//Rendering the homepage
app.get('/', (req,res)=>{
    res.send('<h1>Welcome to the page, Let us go and add some products nigga</h1>')
    console.log(req.body)
});

//Connect to the database
try{
    mongoose.connect("mongodb://localhost:27017/")
    console.log("Database connected successfully");
    app.listen(5000,()=>{
        console.log('app is running on port 5000')
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

