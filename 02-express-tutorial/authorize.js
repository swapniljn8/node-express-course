const authorize = (req,res,next) => {
    const {user} = req.query;
    if(user === 'test') {
        req.user = {name:'test',id:3}//adding the user property in the req
        next()
    }
   /*  else {
        res.status(401).send('Unauthorized')
    } */
    console.log('Authorized');
    next()
}
module.exports = authorize