import React, { useReducer, useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import reducer from './reducers';
import ProductContext from './contexts/ProductContext'
import { initialState } from './reducers'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Actions
import { addItemToCart } from './actions'

function App() {
	const [products] = useState(data);
	const [cart, dispatch] = useReducer(reducer, initialState);

	const addItem = item => {
		console.log('running')
		dispatch(addItemToCart())
	};

	return (
		<ProductContext.Provider value={ initialState }>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products products={products} addItem={addItem} />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
