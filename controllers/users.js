var sql = require('../module/dbSql');
var db = require('../db/config')
var moment = require('moment')
// 增加
// function addAction(req, res, next) {
// 	// 传参
// 	var param = req.query || req.params;
// 	db.queryArgs(sql.insertOne,[param.attendanceNo,param.address,param.makeDate],(err,result) => {
// 		if (!err) {
// 			result = {
// 				code: 200,
// 				msg: 'sucess'
// 			}
// 		} else {
// 			result = {
// 				code:201,
// 				err
// 			}
// 		}
// 		db.responseDoReturn(res,result);
// 	})
// }

// // 删除
// function delectAction (req, res, next) {
// 	var param = req.query;
// 	db.queryArgs(sql.deleteOne,param.attendanceNo, (err,result) => {
// 		if (!err) {
// 			result = {
// 				code: 200,
// 				msg: 'success'
// 			}
// 		} else {
// 			result = {
// 				code: 201,
// 				msg: 'err' + err
// 			}
// 		}
// 		db.responseDoReturn(res, result)
// 	})
// }
// // 查询全部的
// function queryAll (req,res,callback) {
// 	var result = {};
// 	db.query(sql.selectAll, (err,rows) => {
// 		if (!err) {
// 			result ={
// 				code: 200,
// 				msg: 'success',
// 				list: rows
// 			}
// 		} else {
// 			result = {
// 				code: 201,
// 				msg: 'err' + err
// 			}
// 		}a
// 	})
// }

// 查询某一个  登录
function selectOne( req, res, callback) {
  let param = req.query || req.params || req.body
  let userCode = req.body.userCode || req.params.userCode || req.query.userCode;
  let password = req.body.password || req.params.password || req.query.password;
  // console.log('1', userCode,'2',password);
  
	db.query(`select * from count where userCode = ${userCode} and password = ${password}`,(err, result) => {
		if (!err) {
			result = {
				code: '200',
				msg: 'success',
			}
		} else {
			result = {
				code: '201',
        err
			}
    }
    db.responseDoReturn(res,result)
	})
}

// 注册
function register(req,res,callback) {
  // console.log('1',req)

  let userCode = req.body.userCode || req.query.userCode || req.params.userCode; // 账号
  let password = req.body.password || req.query.password || req.params.password; // 密码
  // let vertify = req.body.vertify; // 验证码
  console.log('1',userCode,'2',password)
  let theTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  let registerSql = "insert into count value(?,?,?)"
  db.queryArgs(registerSql,[userCode,password,theTime],(err,result) => {
    if(!err){
      result ={
        code: '200',
				msg: 'success'
      }
    } else {
      result = {
        code: '201',
        err
      }
    }
    db.responseDoReturn(res,result)
  })
}
// 更新
// function updateAction (req,res,callabck) {
// 	var param = req.query || req.params;
// 	if (param.address) {
// 		var temp = [param.address,param.makeDate,param.attendanceNo];
// 		var _sql = sql.updateOne
// 	} else {
// 		var temp =[param.makeDate,param.attendanceNo];
// 		var _sql = sql.updateOnlyOne
// 	}
// 	db.queryArgs(_sql,temp , (err, result) => {
// 		if (!err) {
// 			result={
// 				code: 200,
// 				msg: 'success'
// 			}
// 		} else {
// 			result ={
// 				code: 201,
// 				msg:err
// 			}
// 		}
// 		callabck(result)
// 	})
// }

module.exports = {
  register,
	selectOne,
}