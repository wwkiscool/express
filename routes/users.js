var express = require('express');
var router = express.Router();
var sqlDo = require('../controllers/users')


/* GET users listing. */
// 新增
// router.post('/', (req,res,next) => {
//   sqlDo.addAction(req,res,next)
// })

// // 删除
// router.post('/delete', (req,res,next) => {
//   sqlDo.delectAction(req,res,next);
// })

// // 查询 全部
// router.post('/select', (req,res,next) =>{
//   sqlDo.queryAll(req,res,(result) => {
//     res.send({result})
//   })
// })

// 查询某一条
router.post('/selectOne',(req,res,next) => {
  sqlDo.selectOne(req,res,(result) => {
    res.send({result})
  })
})
// 注册
router.post('/register',(req,res,next) =>{
  sqlDo.register(req,res,next)
})
// // 更新
// router.post('/update' ,(req,res,next) => {
//   sqlDo.updateAction(req,res,(result) => {
//     res.json(result)
//   })
// })

module.exports = router;
