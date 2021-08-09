const name = require('./name')
const sayHi = require('./utils')
const data = require('./alternative-favor')

require('./mind-grenade')
//console.log(data.singlePerson.name)
//sayHi(name.name)
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder',
	'text.txt')
console.log(filePath)

console.log(path.resolve(__dirname,
	'content', 'subfolder', 'text.txt'))