import {Schema} from "mongoose"

const mongoose = require('mongoose')

const userSchema = new Schema({
    user : {type : String, required : true},
    hash : {type : String, required : true},
    name : {type : String, required : true},
    second_name : {type : String, required : true},
    phone : String,
    credentials : {type : String, required : true}
})

const UserModel = mongoose.model("User", userSchema)

export class User{

    public static async checkUser(_user : String, _hash : String){
        let userFind = await UserModel.findOne({user : _user, hash : _hash})
        if(userFind.length == 0){
            return false
        }else{
            return true
        }
    }

    public static async findOneUser(_user : String, _hash : String){
        return await UserModel.findOne({user : _user, hash : _hash})
    }

    public static async registerOneUser(
        body : {
            user : String,
            hash : String,
            name : String,
            second_name : String,
            phone : String,
            credentials : String
        }
    ){
        const userToRegister = new UserModel(
            {
                user : body.user,
                hash : body.hash,
                name : body.name,
                second_name : body.second_name,
                phone : body.phone,
                credentials : body.credentials
            }
        );
        //console.log(userToRegister)
        return await userToRegister.save();
    }


}