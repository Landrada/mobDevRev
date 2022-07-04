import User, { validateUser} from './../models/userModal.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp = async(req,res)=>{
    const {name,email,password} = req.body;
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.message)

    try {
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({message: 'User already exists'})
        const salt = await bcrypt.genSalt(4);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({name,email,password: hashedPassword});
        const createdUser= await newUser.save()
        const token = jwt.sign({id: createdUser._id},
            process.env.SECRET,
            {expiresIn: '10h'})
        res.status(201).json({createdUser,token})
    } catch (error) {
        res.status(404).json(error.response)
    }
}

export const signIn= async(req,res)=>{
    const {email,password} = req.body;
    try {
        const userExist = await User.findOne({email});
        const correctPassword= await bcrypt.compare(password, userExist.password);
        if(userExist&&correctPassword){
            const token = jwt.sign({id: userExist._id},
                process.env.SECRET,
                {expiresIn: '10h'});
        res.status(200).json({userExist,token})
        }else{
            res.status(404).json({message: 'Invalid email or password'})
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}