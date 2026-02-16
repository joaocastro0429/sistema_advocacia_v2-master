import { RequestHandler } from 'express'
import { getPetitions } from '../services/get.service' // Updated import

export const PetitionsController: RequestHandler = async (req, res) => { // Updated controller name
    try {
        const petitions = await getPetitions() // Updated function call and variable name
        res.json(petitions) // Updated response variable
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}