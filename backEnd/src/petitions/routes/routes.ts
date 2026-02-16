import {CreateController} from '../controllers/create.controller'
import {PetitionsController} from '../controllers/get.controller' // Updated import
import {GetPetitionByIdController} from '../controllers/getById.controller' // Updated import
import {deletePetitionController} from '../controllers/delete.controller' // Updated import
import {updatePetitionController} from '../controllers/update.controller' // Updated import
import {Router} from 'express'
import { authMiddleware } from '../../login/middlewares/auth.middleware'

export const petitionRoutes = Router() // Updated route object name

petitionRoutes.post('/petitions', authMiddleware, CreateController) // Updated path and router name
petitionRoutes.get('/petitions', PetitionsController) // Updated path and router name
petitionRoutes.get('/petitions/:id', GetPetitionByIdController) // Updated path and router name
petitionRoutes.put('/petitions/:id', authMiddleware, updatePetitionController) // Updated path and router name
petitionRoutes.delete('/petitions/:id', authMiddleware, deletePetitionController) // Updated path and router name
