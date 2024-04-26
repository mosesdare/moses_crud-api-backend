import { Product } from "../models/products.model.js"

// Viewing all the products using the GET request
export const getProducts =  async(req,res)=>{
    
    try{
        const {id} = req.params;
        if(!id){
        const product = await Product.find({})
        return res.status(200).json({
                            count: product.length,
                             data: product
                            });
                }
        const product = await Product.findById(id);                
        return res.status(200).json({data:product});        
        
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
};

//Sending a post request to add a product
export const addProduct = async(req,res)=>{
   
    try{
    const product = await Product.create(req.body);
    return res.status(200).json({product});

   } catch(err){
    res.status(500).json({
        message: err.message
    })
   }
   
};

//Updating a product in the database

export const updateProduct = async (req,res)=>{
try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)
    
    if(!product){
       return res.status(404).json({
        message: 'Product not found'
    });
    }
    const Updatedproduct = await Product.findById(id);
    return res.status(200).json(Updatedproduct);

}catch(err){
    res.status(500).json({
        message: "Your papa"
    })
}
};


//Deleting a product from the database

export const deleteProduct = async (req,res)=>{
try{
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        return res.status(404).json({
         message: 'Product not found'
     });
    }
    res.status(200).json(product);
    return res.send ('Deleted successfully');
}catch(err){
    res.status(500).json({message:err.message});
}
};



    // getProducts, 
    // updateProduct, 
    // deleteProduct}

