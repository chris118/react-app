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
	render() {
		console.log("isStock", this.props.isStock);

		var items = [];
		this.props.products.forEach((product) => {
			console.log("stocked", product.stocked);
			if(product.name.indexOf(this.props.filterText) === -1 &&
				 (product.stocked == this.props.isStock)){
				return;
			}
			items.push(<ProductRow product={product} key={product.name}/>);
		});

		return (
			<Styletable>
				<thead>
					 <tr>
						 <th>Name</th>
						 <th>Price</th>
						 <th>stocked</th>
					 </tr>
				 </thead>
				 <tbody>
				 	{items}
				 </tbody>
			</Styletable>
		);
	}
}

export default ProductsTable;
