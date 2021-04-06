import {Router} from 'express'

import{addData

} 
from './controller'
 
const router=new Router()

router.post('/adddata',addData)

export default router