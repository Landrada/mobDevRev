import mongoose from "mongoose";
import Joi from 'joi'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password']
    }
})

const User = mongoose.model('User', userSchema);
export default User;

export const validateUser = (user)=>{
    const schema = Joi.object({
      name: Joi.string().required().min(3),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(5)
    })
   return  schema.validate(user)
}
