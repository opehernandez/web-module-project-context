import React, { useContext } from 'react';

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext';
const Products = (props) => {
	const { product, addItem } = useContext(ProductContext)
	
	return (
		<div className="products-container">
			{product.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
