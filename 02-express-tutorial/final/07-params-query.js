const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  let string = '<h1> Home Page</h1><a href="/api/products/1">product1</a>'
  string += ' <a href="/api/products/1/reviews/1">review1</a>'
  string += ' <a href="/api/products/2">product2</a>'
  string += ' <a href="/api/products/2/reviews/2">review2</a>'
  res.send(string)
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find((product) => 
    product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }
  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
