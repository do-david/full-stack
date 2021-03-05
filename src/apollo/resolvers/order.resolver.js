import Order from "../../models/order.model";

module.exports = {
    Query: {
        getOrders: () => {
            return Order.find().populate('user').populate('products');
        },
        order: (parent, args) => {
            return Order.findById(args.id).populate('user').populate('products');
        }
    },
    Mutation: {
        makeOrder: (root, args) => {
            const newOrder = new Order({
                totalAmount: args.totalAmount,
                user: args.user,
                products: args.products
            });
            return newOrder.save();
        }
    }
}