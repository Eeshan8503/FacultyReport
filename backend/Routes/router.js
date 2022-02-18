const express=require('express');
const controller=require('./../controller/controller');
const router=express.Router();

router
    .route('/fundedProject')
    .post(controller.addFundedProject);


module.exports=router;