
const express = require('express');
const router = express.Router();
//const Task = require('../model/task');


router.get('/', async function(req,res){
  res.render('index');
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req,res) =>{

  let task = new Task(req.body)
  await  task.save()
  res.redirect('/')
 });




module.exports = router;