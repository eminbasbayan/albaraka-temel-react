import React from 'react'
import Cart from '../components/Cart/Cart'
import Header from '../components/Layout/Header'

const CartPage = () => {
  return (
    <div className='cart-page'>
      <Header />
        <h1>Cart Page</h1>
        <Cart />
    </div>
  )
}

export default CartPage