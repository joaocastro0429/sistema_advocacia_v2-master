import { RequestHandler } from 'express'
import {UpdatePetition} from '../services/update.service' // Updated import

export const updatePetitionController:RequestHandler = async (req, res) => { // Updated controller name
  const  id  = String (req.params.id)
  const data = req.body

  try {
    const updatedPetition = await UpdatePetition(id, data) // Updated function call and variable
    console.log(updatedPetition) // Updated log
    return res.json(updatedPetition) // Updated response variable
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update petition' }) // Updated error message
  }
}
