import React from 'react';
import styled from 'styled-components';

const StyleForm = styled.form`
	background: red;
	padding: 10px;
	margin: 20px;
`;

const StyleInput = styled.input`
	box-sizing:border-box;
	width: 100%;
`;

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.handleFilterTextChanged = this.handleFilterTextChanged.bind(this);
		this.handleShowStock = this.handleShowStock.bind(this);
	}

	handleFilterTextChanged(e){
		this.props.onFilterTextChanged(e.target.value);
	}

	handleShowStock(e){
		this.props.onHandleShowStock(e.target.checked);
	}

	render() {
		return (
			<StyleForm>
				<StyleInput type="text" placeholder="search..."
					value={this.props.filterText}
					onChange={this.handleFilterTextChanged}/><br/>
				<input id="showstock" type="checkbox"
				 checked={this.props.inStockOnly}
				 onChange={this.handleFilterTextChanged}/>
				<label >Only show products in stock</label>
			</StyleForm>
		);
	}
}

export default SearchBar;
