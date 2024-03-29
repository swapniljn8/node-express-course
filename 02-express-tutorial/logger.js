const logger = (req,res,next) => {//arrow function
    const method = req.method
    const url = req.url 
    const time = new Date().getFullYear()
    console.log(method,url,time);
    next()
}

module.exports = logger