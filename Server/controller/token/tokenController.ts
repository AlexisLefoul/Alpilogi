import {Token} from '../../models/token/Token'

export class TokenController{

    public static async saveToken(user : String){
        let token = Token.registerToken(user)
        //console.log(token)
        return token
    }
    

}