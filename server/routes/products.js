import express from 'express'
import axios from 'axios'
import offersClient from '../clients/offersClient'

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => { 
    const searchParam = req.query.search;

    const numbersValidator = /^\d*$/

    let apiParam
    if(numbersValidator.test(searchParam)){
        apiParam = `id=${searchParam}`
        console.log(`apiParam: ${apiParam}`)
    }else{
        apiParam = `text=${searchParam}`
        console.log(`apiParam: ${apiParam}`)
    }

    const offersResponse = await offersClient(apiParam)
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send( offersResponse )
});

export default router