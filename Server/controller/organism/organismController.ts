import {Organism} from '../../models/organism/organism'

export class OrganismController{

    public static async postOrganism(req, res){
        await Organism.registerOneOrganism(req.body)
        res.status(201)
        res.send()
    }

}