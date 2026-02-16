import {Router} from 'express'
import {CreateProcessController} from '../controllers/process.controller'
import {GetprocessController} from '../controllers/get.controller'
import {GetProcessById} from '../controllers/getById'
import { updateProcessController} from '../controllers/update.controller'
import {deleteController} from '../controllers/delete.controller'


export const ProcessRouter= Router()

ProcessRouter.get("/processes",GetprocessController)
ProcessRouter.get("/processes/:id",GetProcessById)
ProcessRouter.post("/processes",CreateProcessController)
ProcessRouter.put("/processes/:id",updateProcessController)
ProcessRouter.delete("/processes/:id",deleteController)

