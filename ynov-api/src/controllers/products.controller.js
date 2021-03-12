import Product from "../models/product.model";

exports.getAllProducts= (req,res) => {
    Product.find()
    .then((data)=> {
        res.send(data);
    })
    .catch((err)=> {
        console.log(err);
    })
}

exports.getProduct = (req,res) => {
    Product.findById(req.params.id)
    .then((product)=> {
        if(!product) {
            return res.status(404).send({
                message: `product not found with id ${req.param.id}`
            })
        }
        res.send(product);
    })
    .catch((err)=>{
        res.send(err);
    })
}