import { RequestHandler } from 'express'
import {GetPetitionById} from '../services/getById.service' // Updated import

export const GetPetitionByIdController: RequestHandler = async (req, res) => { // Updated controller name
    const  id  = String (req.params.id) 
    try {
        const petition = await GetPetitionById(id) // Updated function call and variable
        if (!petition) { // Updated variable
            return res.status(404).json({ error: 'Petition not found' }) // Updated error message
        }
        res.json(petition) // Updated response variable
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}