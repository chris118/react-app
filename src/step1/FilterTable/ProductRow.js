import React from 'react';

class ProductRow extends React.Component {
	render() {
    var product = this.props.product;
		return (
			<tr>
				<td>{product.name}</td>
        <td>{product.price}</td>
				<td>{product.stocked === true? 'yes': 'no'}</td>
			</tr>
		);
	}
}

export default ProductRow;
