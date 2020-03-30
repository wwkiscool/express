var sql = {
  selectOne : 'select * from user where userCode = ? and passWord = ?',
  register: 'insert into user value ?'
}
module.exports = sql