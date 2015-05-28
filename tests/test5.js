var getDate = require('../index')

var date = new Date(2015, 6, 29, 6, 31, 21)
function log (attr) {
  console.log(getDate(date, attr))
}

console.log()
console.log(new Date(2015, 6, 29, 6, 31, 21).toLocaleString())
console.log()
console.log('------------ FORMATS (MASKS) -----------------')
log('default')
log('now')
log('shortDate')
log('mediumDate')
log('longDate'           )
log('fullDate'           )
log('shortTime'          )
log('mediumTime'         )
log('longTime'           )
log('isoDate'            )
log('isoTime'            )
log('iso'            )
log('isoDateTime'        )
log('isoUtcDateTime'     )
log('expiresHeaderFormat')
log('timestamp'          )

