import { RequestHandler } from 'express'
import {createPetition} from '../services/create.service' // Updated import

export const CreateController: RequestHandler = async (req, res) => {
    try {
        const result = await createPetition(req.body) // Updated function call
        console.log(result)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}