import {Router} from 'express'
import * as productPhoneCtrl from '../../ctrls/phone.js'
import createError from 'http-errors';

const router = Router();

router.get('/phone/:id',(req,res,next)=>{
    const id = Number(req.params.id)
    const { findPhoneById } = productPhoneCtrl;
    
    const items = findPhoneById(id);

    if(!items){
        const err = createError(404)
        next(err)
        return
    }
    res.render('phone',{items})
})

export default router;