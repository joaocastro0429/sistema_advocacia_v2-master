import {Router} from 'express'
import {createController} from   '../../clients/controllers/create.controller'
import {getClient } from '../../clients/controllers/get.controller'
import {getClientByIdController } from '../../clients/controllers/getById.controller'
import { updateClientController } from '../controllers/update.controller'
import { deleteClientController } from '../controllers/delete.controller'

const router= Router()

router.post("/clients",createController)
router.get("/clients",getClient)
router.get("/clients/:id",getClientByIdController)
router.put("/clients/:id",updateClientController)
router.delete("/clients/:id",deleteClientController)


export{router}
