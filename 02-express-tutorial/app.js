const express = require('express')
const people = require('./routes/people')
const auth = require('./routes/auth')

app = express()
//parse form data
app.use(express.urlencoded({extended : false})) //this will be implemented for all request
//parse json
app.use(express.json())
//static asset : to include the middleware to be applied for all the user.
app.use(express.static('./methods-public'))
//now this will only be applied to url that uses : api/people
app.use('/api/people',people)
app.use('/login', auth)


app.listen(5000,() => {
    console.log('server is listening to 5000....');
})

console.log('first')
setTimeout(() => {
	console.log('second')  
},0)
console.log('third')

