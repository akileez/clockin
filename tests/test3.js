var getDate = require('../index')

var present = new Date()

function log (str, attr) {
  console.log(str, getDate(present, attr))
}

console.log()
console.log(new Date().toLocaleString())
console.log('   getDate(date, format)')
console.log()
console.log('------------ Present Time with Flags -----------------')
log('year: ', 'yyyy')
log('year: ', 'yy')
log('month: ', 'm')
log('month: ', 'mm')
log('month: ', 'mmm')
log('month: ', 'mmmm')
log('day: ', 'd')
log('day: ', 'dd')
log('day: ', 'ddd')
log('day: ', 'dddd')
log('ordinal: ', 'o')
log('day: ', 'O')
log('hour: ', 'h')
log('hour: ', 'hh')
log('hour: ', 'H')
log('hour: ', 'HH')
log('minute: ', 'M')
log('minute: ', 'MM')
log('seconds: ', 'S')
log('seconds: ', 'SS')
log('milliseconds: ', 's')
log('milliseconds: ', 'ss')
log('GMT offset: ', 'Z')
log('meridan: ', 't')
log('meridan: ', 'tt')
log('meridan: ', 'T')
log('meridan: ', 'TT')
log('day this year: ', 'N')
log('week this year: ', 'W')
log('quarter this year: ', 'Q')
log('days this month: ', 'u')
log('days this year: ', 'uu')
log('days left this week: ', 'x')
log('days left this month: ', 'xx')
log('days left this year: ', 'xxx')
log('is leap year? ', 'v')