import {createAppointment} from '../controllers/create.controller'
import {GetAppointment} from '../controllers/get.controller'
import {GetByIdAppointment}  from '../controllers/getById.controller'
import { updateAppointmentController } from '../controllers/update.controller'
import { deleteAppointmentController } from '../controllers/delete.controller'
import {Router} from 'express'

export const appointmentRoutes= Router()

appointmentRoutes.post("/appointments",createAppointment)
appointmentRoutes.get("/appointments",GetAppointment)
appointmentRoutes.get("/appointments/:id",GetByIdAppointment)
appointmentRoutes.put("/appointments/:id", updateAppointmentController)
appointmentRoutes.delete("/appointments/:id", deleteAppointmentController)
