const productModel = require('../models/ProductModel')
var url = require("url")
productController = {}

productController.getAll = (req, res) => {
    productModel.find({}, (err, products, req)=>{ 
    if (err) {
    res.status(500).send('error')
    }  else {
            products.map((currentProduct)=> {
                currentProduct.pic1 = `${process.env.URL_PUBLIC}${currentProduct.pic1}`
                currentProduct.pic2 = `${process.env.URL_PUBLIC}${currentProduct.pic2}`
                currentProduct.pic3 = `${process.env.URL_PUBLIC}${currentProduct.pic3}`
        })
    
    res.header('Content-Range', `posts 0-20/20`)
    res.status(200).send(products)
    }
    
} )
}

productController.getCategory = (req,res) => {
    productModel.find({category: req.params.category}, (err, categoryProducts)=>{ 
        if (err) {
        res.status(500).send('error')
        }  else {
                    categoryProducts.map((currentProduct)=> {
                    currentProduct.pic1 = `${process.env.URL_PUBLIC}${currentProduct.pic1}`
                    currentProduct.pic2 = `${process.env.URL_PUBLIC}${currentProduct.pic2}`
                    currentProduct.pic3 = `${process.env.URL_PUBLIC}${currentProduct.pic3}`

                    if (currentProduct.originalPic) {
                        currentProduct.originalPic = `${process.env.URL_PUBLIC}${currentProduct.originalPic}`
                    }
            })
        
            
        res.header('Content-Range', `posts 0-20/20`)
        res.status(200).send(categoryProducts)
        }
        
    } )

}

    productController.getById = (req, res) => {
        productModel.findOne({id: req.params.id}, (err, product)=>{ 
        if (err) {
        res.status(500).send('error')
        }  else {
        product.pic1 = `${process.env.URL_PUBLIC}${product.pic1}`
        product.pic2 = `${process.env.URL_PUBLIC}${product.pic2}`
        product.pic3 = `${process.env.URL_PUBLIC}${product.pic3}`
        res.status(200).send(product)
        }
        
    } )

}

productController.post = (req, res) => {
    const product = new productModel(req.body); 
    product.save().then(() => res.send(product))
}

productController.put = (req, res) => { // set is replacing the former product, with req.body 
    productModel.findOneAndUpdate({id: req.params.id},{$set: req.body}, (err, updatedProduct)=>{
        err ? res.status(500).send('error'):
        res.status(200).send(updatedProduct)
    } )
}

productController.delete = (req, res) => {
productModel.findOneAndDelete({id: req.params.id}, (err)=>{
    err ? res.send('error'):
    res.status(200).send('product deleted')
} )
}

module.exports = productController; 
