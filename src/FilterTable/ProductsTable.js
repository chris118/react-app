import React from 'react';
import styled from 'styled-components';
import ProductRow from './ProductRow';

const Styletable = styled.table`
	background: red;
	padding: 10px;
	margin: 20px;
	display: block;
`;

class ProductsTable extends React.Component {
	constructor(props) {
		super(props)
		console.log("chris", this.props.products);

	}
	render() {
		var items = [];
		this.props.products.forEach((product) => {
			items.push(<ProductRow product={product}/>)
		});

		return (
			<Styletable>
				{items}
			</Styletable>
		);
	}
}

export default ProductsTable;
