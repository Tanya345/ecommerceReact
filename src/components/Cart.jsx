import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App'
import ThankYou from './ThankYou'

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false)
  const { cartItems, setCartItems, addToCart, setAddToCart} = useContext(AppContext)
  const [items, setItems] = useState()
  const [quantity, setQuantity ] =useState(false)
  const api = 'https://dummyjson.com/carts/add';

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: cartItems
        })
      })
      const data = await result.json();
      setItems(data)
    }
    fetchData()
  }, [cartItems,quantity])

  const handleCheckOut = () => {
    setIsCheckout(!isCheckout)
    setCartItems([])
  }

  const handleDeleteItemFromCart = (item) => {
    console.log(item.id)
    const newCart = cartItems.filter((i) => {
      console.log(i.id)
      return (
        i.id !== item.id
      )
    });
    setCartItems(newCart)
  }

  const handleItemDecrement = (product) => {
    if (product.quantity >1) {
      setQuantity(!quantity)
      const index = cartItems.findIndex(item => item.id === product.id)
      cartItems[index].quantity -= 1
    }
    else{
      handleDeleteItemFromCart(product)
    }
  }

  const handleItemIncrement = (product) => {
    setQuantity(!quantity)
    const index = cartItems.findIndex(item => item.id === product.id)
    cartItems[index].quantity += 1
  }

  return (
    isCheckout ?
      <ThankYou />
      :
      <div className='cartDiv'>
        {cartItems.length > 0 ? (
          <>
            <div className="cartItemsDiv px-3 py-4">
              <div className="table-responsive p-2">
                <table className="table align-middle table-striped table-hover table-dark">
                  <thead className='text-primary mb-3'>
                    <tr>
                      <th colSpan='3'>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.products?.map((item, i) => {
                      return (
                        <tr key={item.id}>
                          <td role='button' onClick={() => handleDeleteItemFromCart(item)}>x</td>
                          <td><img src={cartItems[i]?.image} alt="prImg" width="140px" height="120px" /></td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>
                            <div className='cartQuantity'>
                              <span className="p-1" role='button' onClick={() => handleItemDecrement(item)}>&#8722;</span>
                              {item.quantity}
                              <span className="p-1" role='button' onClick={() => handleItemIncrement(item)}>&#43;</span>
                            </div>
                          </td>
                          <td>{item.total}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="cartTotal px-3 py-4">
              <div className="card p-1">
                <h4 className='card-title text-start px-3'>Cart Totals</h4>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between p-1 align-items-center">
                    <h6>Subtotals</h6>
                    <span>{items?.total}</span>
                  </div>
                  <hr style={{ color: '#443b3b7d', width: '100%', margin: '0px' }} />
                  <div className="d-flex justify-content-between p-1 align-items-center">
                    <h6>Total</h6>
                    <span>{items?.total}</span>
                  </div>
                  <button className='checkout' onClick={handleCheckOut}>PROCEED TO CHECKOUT</button>
                </div>
              </div>
            </div>
          </>) :
          (<div className="d-flex flex-column align-items-center justify-content-center w-100">
            <h2>Cart is empty</h2>
            <button className='checkout' onClick={() => setAddToCart(!addToCart)}>Add Products</button>
          </div>)}
      </div>
  )
}

export default Cart