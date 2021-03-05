import Order from "../models/order.model";

exports.createOrder = (req,res) => {
    const order = new Order({
        totalAmount: req.body.totalAmount,
        user: req.body.user,
        products: req.body.products
    });

    order.save()
    .then((data)=> {
        res.send(data);
    })
    .catch((err)=> {
        console.log(err);
    });
}

exports.getOrders = (req, res) => {
    Order.find()
    .populate('products')
    .populate('user')
    .then((data)=> {
        res.send(data);
    })
    .catch((err)=> {
        console.log(err);
    });
}