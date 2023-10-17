// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
require('./07-mind-grenade') //the sum is : 15

const {john,peter} = require('./04-names') // it should have the same attribute name as in module.
console.log(john);
console.log(peter);

const names = require('./04-names')
console.log('names =',names)

const sayHii = require('./05-utils')
sayHii.sayHello(names.john)
sayHii.sayHi(names.peter)


const data = require('./06-alternative-flavor')
console.log('data =',data)
