import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

const StyleDiv = styled.div`
	background: #ccf;
	border: 3px solid yellow;
	height: auto;
	width: 300px;
	display: inline-block;
	text-align: center;
`;

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


class FilterTable extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			filterText: ''
		};

		this.handleFilterTextChanged = this.handleFilterTextChanged.bind(this);
	}

	handleFilterTextChanged(text){
		this.setState({
			filterText: text
		});
	}

	render() {
		return (
			<StyleDiv>
				<SearchBar products= {PRODUCTS} onFilterTextChanged={this.handleFilterTextChanged}/>
				<ProductsTable
				products= {PRODUCTS}
				filterText={this.state.filterText}/>
			</StyleDiv>
		);
	}
}

export default FilterTable;
