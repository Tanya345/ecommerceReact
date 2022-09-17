import React, { useState, useEffect,createContext } from 'react'
import Filters from './Filters'
import Products from './Products'
export const StoreContext = createContext([]);

let filterArr=[]
const Store = () => {
	const [products, setProducts] = useState([])
	const [currentCategory, setCurrentCategory] = useState('All')
	const [categories, setCategories] = useState([])
	const [filterValue, setFilterValue] = useState('')

	const handleSearch = (e) =>{
		let v = e.target.value;
		setFilterValue(v);
	}
	filterArr = products?.filter((prod) => {
		let name = prod.title
		return (
				name.toLowerCase().trim().indexOf(filterValue.toLowerCase().trim()) ===0
				)
	})
	
	const api = 'https://dummyjson.com/products/categories'
	useEffect(() => {
		async function fetchData() {
			const result = await fetch(api)
			setCategories(await result.json())
		}
		fetchData()
	}, [])
	useEffect(() => {
		let api = currentCategory === 'All' ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${currentCategory}`
		async function fetchData() {
			const result = await fetch(api)
			let data = await result.json()
			setProducts(data.products)
		}
		fetchData()
	}, [currentCategory])

	return (
		<StoreContext.Provider value={{ filterArr, setProducts, filterValue, setFilterValue }}>
			<div className='py-2'>
				<Filters data={{ categories, currentCategory, setCurrentCategory,handleSearch }}  />
				<Products currentCategory={currentCategory}/>
			</div>
		</StoreContext.Provider>
	)
}

export default Store