import User from "../../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AuthenticationError, UserInputError } from "apollo-server-errors";

const EXPIRE_IN_ONE_DAY = process.env.EXPIREINHOUR * 24;


module.exports = {
    Query: {
        users: () => {
            return User.find();
        },
        getCurrentUser: (parent, args) => {
            return User.findById(args.id);
        },
        login: (parent, args) => {
            const email = args.email;
            return User.findOne({ email:email })
            .then((user)=> {
                if(!user) {
                    throw new UserInputError(`invalid ${email} value`);
                }
                let passwordIsValid = bcrypt.compareSync(args.password, user.password);
                if(!passwordIsValid){
                    throw new AuthenticationError(`invalid ${password} value`);
                }
                const token = jwt.sign({
                    id: user._id,
                    admin: user.isAdmin
                },
                process.env.SECRET,
                {
                    expiresIn: EXPIRE_IN_ONE_DAY
                });
                const result = {auth: true, token};
                return(result);
            })
            .catch((err) => {
                throw err;
            })
        },
        logout: () => {
            const result = { 
                auth: false,
                token: null
            };
            return (result);
        }
    },
    Mutation: {
        register: (root, args) => {
            let hashedPassword = bcrypt.hashSync(args.user.password, 10);
            //vérifier que l'email est unique par compte
            const newUser = new User({
                firstName: args.user.firstName,
                lastName: args.user.lastName,
                email: args.user.email,
                password: hashedPassword,
                age: args.user.age,
                isAdmin: args.user.isAdmin
            });
            return newUser.save();
        },
        updateUser: (root, args) => {
            const id = args.id;
            const body = args.user;
            return User.findByIdAndUpdate(id, body)
            .then(user => {
                if(!user){
                    throw new UserInputError(`invalid ${id} value`);
                }
                const res = {
                    code:200,
                    success:true,
                    message:`User ${id} updated successfully`,
                    user
                };
                return res;
            }).catch(err => {
                const res = {
                    code:500,
                    success:false,
                    message: err.message
                };
                return(res);
            });
        },
        deleteUser: (parent,conditions) => {
            const id = conditions.id;
            return User.findByIdAndDelete(id)
            .then(user => {
                if(!user){
                    throw new UserInputError(`invalid ${id} value`);
                }
                const res = {
                    code:200,
                    success:true,
                    message:`User ${id} deleted successfully`
                };
                return(res);
            }).catch(err => {
                const res = {
                    code:500,
                    success:false,
                    message: err.message
                };
                return(res);
            });
        }
    }
}