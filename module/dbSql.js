var sql = {
    insertOne: 'insert into lsattendance (attendanceNo,address,makeDate) values (?,?,?)',
    deleteOne: 'delete from lsattendance where attendanceNo = ?',
    updateOne: 'update lsattendance set address = ?, makeDate = ？ where attendanceNo = ?',
    selectOne : 'select * from lsattendance where attendanceNo = ?',
    selectAll: 'select * from lsattendance'
}
module.exports = sql