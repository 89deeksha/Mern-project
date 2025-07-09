import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    "Fullname":{
        type:String,
        required:true

    },
    "Email":{
        type:String,
        required:true,
        unique:true

    },
    "password":{
        type:String,
        required:true

    },

})
const user=mongoose.model("user",userSchema)
export default user