import React, { useState,useContext } from 'react'
import { AppContext } from '../App'

const Product = ({ product }) => {
	const [quantity, setQuantity] = useState(1)
	const { cartItems, setCartItems } = useContext(AppContext)
	
	const handleCheckClick = (e) => {
		if (e.target.checked) {
				setCartItems(prevState => ([...prevState, { id: product.id, quantity: quantity,image:product.thumbnail }]))
		}
		else {
			const newCart = cartItems.filter((item) => item.id !== product.id);
			setCartItems(newCart)
		}
	}
	const handleChangeQuantity = (e) => {
		let quant = Number( e.target.value);
		setQuantity(quant)
		let isExist = cartItems.find(c => c.id === product.id);
		if (isExist !== undefined) {
			const index=cartItems.findIndex(item => item.id===product.id)
			cartItems[index].quantity=quant
		}
	}
	
	return (
		<>
			<td><img src={product.thumbnail} alt="" width="200px" height="180px" /></td>
			<td>{product.title}</td>
			<td>{product.brand}</td>
			<td>{product.stock}</td>
			<td>{product.price}</td>
			<td><input className="quantInput" type="text" name="quantity" id="quantity" value={quantity} onChange={(e) => handleChangeQuantity(e)} />
				{/* <span className='mx-2'> */}
					<i className="fa-dark fa-cart-shopping"></i>
					{/* </span> */}
				<input className='mx-2' type="checkbox" name="check" id="check" role='button' onClick={(e) => handleCheckClick(e)}/>
			</td>
		</>
	)
}

export default Product