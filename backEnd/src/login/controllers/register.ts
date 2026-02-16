import { RequestHandler } from 'express'
import { Register } from '../services/register.service'

export const RegisterController: RequestHandler = async (req, res) => {
  try {
    const { email, password, name, oabNumber, specialty } = req.body

    // Basic validation for required fields
    if (!email || !password || !name || !oabNumber || !specialty) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    const result = await Register({
      email,
      password,
      name,
      oabNumber,
      specialty,
    })

    return res.status(201).json(result)
  } catch (error: any) {
    return res.status(409).json({
      message: error.message || 'An error occurred during registration.',
    })
  }
}
