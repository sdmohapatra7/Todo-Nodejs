const express=require('express');

const router=express.Router();
const homeController=require('../controller/home_controller');

console.log('router is lodded');

router.get('/',homeController.home);
router.post('/todo-list',homeController.post);
router.get('/update/:id',homeController.updatecheck);
router.get('/delete',homeController.deletetask);

module.exports=router;