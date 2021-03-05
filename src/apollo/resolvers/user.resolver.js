import User from "../../models/user.model";

module.exports = {
    Query: {
        users: () => {
            return User.find();
        },
        getCurrentUser: (parent, args) => {
            return User.findById(args.id);
        },
        // login: (parent, args) => {
        //     return User.findOne({email: args.email});
        // }
    },
    Mutation: {
        register: (root, args) => {
            const newUser = new User({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                password: args.password,
                age: args.age,
                isAdmin: args.isAdmin
            });
            return newUser.save();
        },
        deleteUser: (parent,conditions) => {
            const id = conditions.id;
            return User.findByIdAndDelete(id);
        }
    }
}