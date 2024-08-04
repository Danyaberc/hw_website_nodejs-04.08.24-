import {Router} from 'express'


const router = new Router()

router.get('/',(req,res)=>{
    const title = 'About our companyS'
    res.render('help')
})

export default router;