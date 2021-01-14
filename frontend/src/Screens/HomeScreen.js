import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  // thiis dispatch is the equivalent to connect used With the mapStatetoProps
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
    // const fetchProducts = async () => {
    //   const { data } = await axios.get('/api/products')
    //   setProducts(data)
    // }
    // fetchProducts()
    // console.log('UseEffect on Home Screen.. Products are: ', products)
  }, [dispatch])

  return (
    <>
      <h3>Latest Products</h3>
      {loading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
