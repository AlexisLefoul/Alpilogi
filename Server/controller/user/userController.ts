import { User } from "../../models/user/user"
import { TokenController } from "../token/tokenController"



export class UserController{

    public static async connectUser(req, res){
        let checkIfUserOk = await User.checkUser(req.params.user, req.params.hash)
        if(checkIfUserOk == true){
            let tok = await TokenController.saveToken(req.params.user)
            let userConnected = await User.findOneUser(req.params.user, req.params.hash)
            let tabUser = 
            [
                {
                    user : userConnected.user,
                    credentials : userConnected.credentials, 
                    name : userConnected.name,
                    second_name : userConnected.second_name
                },
                tok
                
            ]
            //console.log(tok)
            await res.status(201)
            await res.send(tabUser)
        }
    }

    public static async postUser(req, res){
        await User.registerOneUser(req.body)
        res.status(201)
        res.send()
    }


}