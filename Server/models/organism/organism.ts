import {Schema} from "mongoose"

const mongoose = require('mongoose')

const organismSchema = new Schema({
    name : {type : String, required : true},
    address : {type : String, required : true},
    city : {type : String, required : true},
    postal_code : {type : String, required : true},
    phone : {type : String, required : true},
    digit : {type : String, required : true}
})

const OrganismModel = mongoose.model("Organism", organismSchema)

export class Organism{

    public static async findOneOrganism(_digit : String){
        return await OrganismModel.findOne({digit : _digit})
    }


    public static async registerOneOrganism(body : 
        {
            name : String,
            address : String,
            city : String,
            postal_code : String,
            phone : String,
            digit : String
        }
    ){
        const organism = new OrganismModel(
            {
                name : body.name,
                address : body.address,
                city : body.city,
                postal_code : body.postal_code,
                phone : body.phone,
                digit : body.digit
            }
        )
        return await organism.save()
    }

}