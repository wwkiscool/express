var express = require('express');
var router = express.Router();
var db = require('../db/config')

/* GET home page. */
router.get('/', (req, res, next) => {
	db.query('select * from lsattendance', (err, rows) => {
		// var result = JSON.stringify(rows);
		res.send({
			state: '1',
			msg: '查询成功',
			data: rows
		})
	})
})

router.post('/only', (req, res, next) => {
	var operatorid = req.query.operatorid;
	console.log(operatorid)
	db.query('select * from lsattendance where operator = '+ operatorid, (err, rows) => {
			res.send({
				state: '1',
				msg: '条件查询',
				data: rows
			})
	})
})

 router.post('/pagination', (req, res, next) =>{
	 var eventPlace = req.query.eventPlace;
	 var curPage = req.query.curPage;
	 var pageSize = 10;
	 var result = (curPage - 1)* pageSize
	 db.query(`select * from lscalendar where eventPlace = '${eventPlace}' order by makeDate asc limit ${result} , ${pageSize}`, (err, row) => {
			 res.send({
				state: '1',
				msg: '分页查询',
				data: row
			 })
		 })
		})
module.exports = router;