import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userSchemaValidation from "../middlewares/validators/user.validation";

const EXPIRE_IN_ONE_DAY = process.env.EXPIREINHOUR * 24;

exports.getAll = (req, res) => {
    User.find()
    .then((data)=> {
        res.send(data);
    })
    .catch((err)=> {
        console.log(err);
    });
}
exports.register = (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        age: req.body.age,
        password: hashedPassword
    });  
    const validation = userSchemaValidation.validate(req.body);
    if(validation.error) {
        return res.status(400).send(validation.error);
    }
    user.save()
        .then(data => {
            let userToken = jwt.sign(
                {
                    id: data._id,
                    admin: data.isAdmin
                },
                process.env.SECRET,
                {
                    expiresIn: EXPIRE_IN_ONE_DAY
                }
            )
            res.send({
                auth: true,
                token:userToken,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        });
}

exports.login = (req, res) => {
    User.findOne({
        email:req.body.email
    })
    .then((user) => {
        if(!user){
            return res.status(404).send({
                message:`user ${req.body.email} not found`
            })
        }
        //vérifier que le password est le bon pour l'utilisateur
        // let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        // if(!passwordIsValid){
        //     res.status(401).send({
        //         auth: false,
        //         token: null
        //     });
        // }
        let userToken = jwt.sign({
            id: user._id,
            admin: user.isAdmin
        },
        process.env.SECRET,
        {
            expiresIn: EXPIRE_IN_ONE_DAY
        });
        res.status(200).send({
            auth: true,
            token: userToken
        });
    })
    .catch((err) => {
        res.send(err);
    })
};

exports.logout = (req, res) => {
    res.status(200).send({
        auth: false,
        token: null
    });
};

exports.getCurrentUser = (req, res) => {
    console.log("get user :",req);
    User.findById(req.params.id)
    .then((user)=> {
        if(!user) {
            return res.status(404).send({
                message: `user not found with id ${req.param.id}`
            })
        }
        res.send(user);
    })
    .catch((err)=> {
        res.send(err);    
    })
};

exports.update = (req,res) => {
    User.findByIdAndUpdate(req.params.id, res.body)
    .then((user)=> {
        if(!user) {
            return res.status(404).send({
                message: `user not found with id ${req.param.id}`
            })
        }
        res.status(200).send({
            message:`user ${eq.params.id} has been edited`
        });
    })
}

exports.delete = (req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then((user)=> {
        let name = `${user.firstName} ${user.lastName}`;
        if(!user) {
            return res.status(404).send({
                message: `user not found with id ${req.param.id}`
            })
        }
        res.status(200).send({
            message:`user ${name} has been deleted`
        });
    })
    .catch((err)=> {
        res.send(err);
    })
}