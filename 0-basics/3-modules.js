const names = require( './4-names')
console.log(names);

const sayHi = require('./5-utils')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter )

const data = require('./6-alternative')
console.log(data);

require('./7-mind-grenade')