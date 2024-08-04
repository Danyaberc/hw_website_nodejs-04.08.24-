import {Router} from 'express';
import * as productPhoneCtrl from '../../ctrls/phone.js'

const router = Router()

router.get('/', (req,res) =>{
    const { findAllPhone } = productPhoneCtrl;
    const items = findAllPhone()
    res.render('main', {items})
})

export default router;