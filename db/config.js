// var express = require('express');
// // var app = express();
var mysql = require('mysql');

let config = {
	host: '192.168.8.100',
	user: 'mspdev',
	password: 'mspdev',
	database: 'mspdev'
}

let pool = mysql.createPool(config);

function query(sql, values, callback) {
	pool.getConnection((err, res) => {
		if (err) {
			console.log('数据库连接失败')
			callback(err)
		}
		console.log('数据库连接成功')
		res.query(sql, values, (err, rows) => {
			callback(err, rows)
			// console.log(rows)
			res.release()
		})
	})
}
exports.query = query