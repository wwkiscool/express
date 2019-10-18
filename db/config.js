var mysql = require('mysql');

// let config = {
// 	host: '192.168.8.100',
// 	user: 'mspdev',
// 	password: 'mspdev',
// 	database: 'mspdev'
// }

let config = {
    host: 'localhost',
	user: 'root',
	port: 3306,
	password: 'root',
	database: 'test1'
}


let pool = mysql.createPool(config);

function responseDoReturn(res, ret) {
	if (typeof ret === 'undefined') {
		res.json({
			code: '-1',
			msg: '操作失败'
		})
	} else {
		res.json(ret);
	}
}

/**
 *封装query sql 不带占位符
 *
 * @param {*} sql
 * @param {*} callback
 */
function query(sql, callback) {
	pool.getConnection((err, res) => {
		if (err) {
			callback(err)
		}

		res.query(sql, (err, rows) => {
			callback(err, rows)
			// console.log(rows)
			res.release()
		});

	})
}

/**
 * 封装query sql带占位符
 */
function queryArgs(sql,args,callback) {
	pool.getConnection((err,connection) => {

    console.log('2',arguments)
		if (err) {
			callback(err)
		} else {
      
			connection.query(sql,args,(err,rows) => {
				connection.release;
        callback(err,rows);
				// 释放链接
			})
		}
	})
}

module.exports = {
	query,
	queryArgs,
	responseDoReturn
}