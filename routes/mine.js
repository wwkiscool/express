var express = require('express');
var router = express.Router();
var db = require('../db/config')

/* GET home page. */
router.get('/', (req, res, next) => {
    db.query('select * from lsattendance', [], (err, rows) => {
        // var result = JSON.stringify(rows);
        res.send({
            state: '1',
            msg:'查询成功',
            data: rows
        })
    })
})

module.exports = router;
