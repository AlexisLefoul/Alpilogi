import {Schema} from "mongoose"

const mongoose = require('mongoose')
const crypto = require('crypto')

const tokenSchema = new Schema({
    user : {
        type : String,
        required : true
    },
    token : {
        type : String,
        required : true
    }
})

const TokenModel = mongoose.model("Token", tokenSchema)

export class Token{

    public static async registerToken(_user : String)
    {

        let tokenGenerate = crypto.createHash('sha1').update(_user + Date.now().toString()).digest('hex')
        const tokenToRegister = new TokenModel(
            {
                user : _user,
                token : tokenGenerate,
            }
        );
        await tokenToRegister.save()

        let tokenToReturn = {
            token : tokenGenerate,
        }

        return await tokenToReturn

    }

}