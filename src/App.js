import React, { useState, useEffect } from 'react';
import './css/app.css';

import { products } from './data/products';

function App() {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		setProductList(products);
	}, []);

	return (
		<div className="container">
			<main className="products">
				{productList.map((product) => {
					const { id, type, desc, src } = product;
					return (
						<section key={id} className={`product--wrapper product__${type}`}>
							<img src={src} alt="..." className="product__img" />
							<h1 className="product__type">{type}</h1>
							<p className="product__desc">{desc}</p>
							<button
								type="button"
								className={`btn btn__product product__${type}__text`}
							>
								Learn More
							</button>
						</section>
					);
				})}
			</main>
		</div>
	);
}

export default App;
