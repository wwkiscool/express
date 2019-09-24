var sql = require('../module/dbSql');
var mysql = require('mysql');
var db = require('../db/config')

// 增加
function addAction(req, res, next) {
	// 传参
	var param = req.query || req.params;
	db.queryArgs(sql.insertOne,[param.attendanceNo,param.address,param.makeDate],(err,result) => {
		if (!err) {
			result = {
				code: 200,
				msg: 'sucess'
			}
		} else {
			result = {
				code:201,
				err
			}
		}
		db.responseDoReturn(res,result);
	})
}

// 删除
function delectAction (req, res, next) {
	var param = req.query;
	db.queryArgs(sql.deleteOne,param.attendanceNo, (err,result) => {
		if (!err) {
			result = {
				code: 200,
				msg: 'success'
			}
		} else {
			result = {
				code: 201,
				msg: 'err' + err
			}
		}
		db.responseDoReturn(res, result)
	})
}
// 查询全部的
function queryAll (req,res,callback) {
	var result = {};
	db.query(sql.selectAll, (err,rows) => {
		if (!err) {
			result ={
				code: 200,
				msg: 'success',
				list: rows
			}
		} else {
			result = {
				code: 201,
				msg: 'err' + err
			}
		}
		callback(result)
	})
}

// 查询某一个
function selectOne( req, res, callback) {
	var result = {};
	var param = req.query || req.params
	db.queryArgs(sql.selectOne, param.attendanceNo,(err, rows) => {
		if (!err) {
			result = {
				code: 200,
				msg: 'success',
				list: rows
			}
		} else {
			result = {
				code: 201,
				err
			}
		}
		callback(result);
	})
}
// 更新
function updateAction (req,res,callabck) {
	var param = req.query || req.params;
	if (param.address) {
		var temp = [param.address,param.makeDate,param.attendanceNo];
		var _sql = sql.updateOne
	} else {
		var temp =[param.makeDate,param.attendanceNo];
		var _sql = sql.updateOnlyOne
	}
	db.queryArgs(_sql,temp , (err, result) => {
		if (!err) {
			result={
				code: 200,
				msg: 'success'
			}
		} else {
			result ={
				code: 201,
				msg:err
			}
		}
		callabck(result)
	})
}

module.exports = {
	addAction,
	delectAction,
	queryAll,
	selectOne,
	updateAction
}