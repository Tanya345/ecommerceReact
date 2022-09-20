import React,{useContext}  from 'react'
import { AppContext } from '../App'
import { StoreContext } from './Store'
import {useNavigate} from 'react-router-dom'

const Filters = ({ data }) => {
	let navigate = useNavigate()
	let { currentCategory, setCurrentCategory, categories ,handleSearch} = data
	const {filterValue} = useContext(StoreContext)
	const {cartItems}=useContext(AppContext)

	return (
		<div className='filterDiv container py-3'>
			<div className='d-flex align-items-center'>
				<select className="form-select d-flex mx-2" value={currentCategory} onChange={(e) => setCurrentCategory(e.target.value)}>
					<option>All</option>
					{categories.map((category, i) => {
						return (
							<option key={i} value={category}>{category}</option>
						)
					})
					}
				</select>
				<i className="bi bi-arrow-90deg-left"></i>
				<span role='button' className='mx-2' onClick={()=>setCurrentCategory('All')}>Reset</span>
			</div>
			<div className='d-flex align-items-center'>
				<input className='mx-2 px-2 py-1 rounded-2 border-1' type="search" name="search" id="search" placeholder='Start Typing to filter...' value={filterValue} onChange={(e)=>handleSearch(e)}/>
				<button className='btn btn-primary mx-2 px-2 py-1' disabled={cartItems.length<=0} onClick={()=>navigate('/cart')}>Add to Cart</button>
			</div>
		</div>
	)
}

export default Filters