import { RequestHandler } from 'express'
import { ProcessCreateService } from '../services/create.services'

export const CreateProcessController: RequestHandler = async (req, res) => {
  try {
    const process = await ProcessCreateService(req.body)
    return res.status(201).json(process)
  } catch (error: any) {
    console.error('Error creating process:', error)
    return res.status(500).json({ 
      message: error.message || 'Erro ao criar processo' 
    })
  }
}
