import React,{useContext} from 'react'
import { AppContext } from '../App'

const ThankYou = () => {

	const {addToCart,setAddToCart}=useContext(AppContext)
	return (
		<div className="thankYouDiv">
			<div className='thankYouCard'>
				<h2>Thankyou for placing an order with us</h2>
				<button className='checkout px-4' onClick={()=>setAddToCart(!addToCart)}>Get More Products</button>
			</div>
		</div>
	)
}

export default ThankYou