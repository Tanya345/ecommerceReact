import React, { useContext} from 'react'
import Product from './Product'
import { StoreContext } from './Store'

const Products = () => {

	const { filterArr} = useContext(StoreContext)

	return (
		<div className='productsDiv container'>
			<div className="table-responsive">
				<table className="table align-middle table-striped table-hover table-dark">
					<thead className='text-primary mb-3'>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Brand</th>
							<th>Stock</th>
							<th>Price</th>
							<th>Buy</th>
						</tr>
					</thead>
					<tbody>
						{filterArr?.map((product) => {
							return (
								<tr key={product.id}>
									<Product product={product} />
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Products