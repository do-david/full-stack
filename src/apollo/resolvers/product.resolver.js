//const Product = require('../../models/product.model');
import Product from "../../models/product.model";
//resolver équivalent au controller c'est ici qu'on met la logique

module.exports = {
    Query: {
        products: () => {
            return Product.find();
        },
        product: (parent, args) => {
            return Product.findById(args.id);
        }
    },
    Mutation: {
        createProduct: (root, args) => {
            const newProduct = new Product({
                title: args.title,
                price: args.price,
                description: args.description,
                imgUrl: args.imgUrl
            });
            return newProduct.save();
        },
        updateProduct: (parent,args) => {
            console.log(args);
            return Product.findByIdAndUpdate(args.id,args);
        },
        deleteProduct: (parent,conditions) => {
            const id = conditions.id;
            return Product.findByIdAndDelete(id);
        }
    }
}