const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
   { flag: 'a' }
)
writeFileSync(
  './content/result-sync2.txt',
  `Here is the result : ${first}, ${second}`,
   { flag: 'w' }
)
writeFileSync(
  './content/result-sync2.txt',
  `Here is the result2 : ${first}, ${second}`,
   { flag: 'w' }
)
//In both the above case of writeFileSync -> it will create the fill if it does not exist and 3rd param is the mode : 'a' -> append, 'w' -> write. And for first -> it will append into file and for 2nd it will only write once and won't append after all.
//By default - 'w'
console.log('done with this task')
console.log('starting the next one')
