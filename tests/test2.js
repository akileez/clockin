var getDate = require('../index')

function log (attr) {
  console.log(getDate(attr))
}

console.log()
console.log(new Date().toLocaleString())
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

