var getDate = require('../index')


var p1 = new Date('2011-10-22T09:01:48-0400')
var p2 = new Date("2011-10-10T14:48:00-0400")
var p3 = new Date("2016-02-29T16:12:10-0400")
var p4 = new Date("2020-07-04T12:19:15-0400")
var p5 = new Date("2010-01-02T11:36:55-0400")
var p6 = new Date(2015, 6, 30, 6, 31, 21)
var p7 = new Date("2015-03-19")

function log (date, attr) {
  console.log(getDate(date, attr))
}

console.log()
console.log(new Date().toLocaleString())
console.log()
console.log('------------ PARSED STRING-----------------')
log(p1, 'default')
log(p2, 'default')
log(p2)
log(p3, 'iso')
log(p4, 'longTime')
log(p5, 'now')
log(p6, 'isoUtcDateTime')
log(p6)
log(p6, 'now')
log(new Date(2015, 6, 30, 6, 31, 21), 'L')
log(new Date(2015, 6, 30, 6, 31, 21), 'O')
log(p6, 'ddd')

log(p7, 'default')

