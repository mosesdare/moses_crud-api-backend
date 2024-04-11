const Product = require('../models/products.model');

// Viewing all the products using the GET request
const getProducts =  async(req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json({product});
        
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
};

//Viewing a particular product using the ID of the product
const getProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
};

//Sending a post request to add a product
const addProduct = async(req,res)=>{
   
    try{
    const product = await Product.create(req.body);
    res.status(200).json({product});

   } catch(err){
    res.status(500).json({
        message: err.message
    })
   }
   
};

//Updating a product in the database

const updateProduct = async (req,res)=>{
try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)
    
    if(!product){
       return res.status(404).json({
        message: 'Product not found'
    });
    }
    const Updatedproduct = await Product.findById(id);
    res.status(200).json(Updatedproduct);

}catch(err){
    res.status(500).json({
        message: "Your papa"
    })
}
};


//Deleting a product from the database

const deleteProduct = async (req,res)=>{
try{
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        return res.status(404).json({
         message: 'Product not found'
     });
    }
    res.status(200).json(product);
    res.send ('Deleted successfully');
}catch(err){
    res.status(500).json({message:err.message});
}
};


module.exports = {getProduct, 
    getProducts, 
    addProduct,
    updateProduct, 
    deleteProduct}

