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

	}

	render() {
		return (
			<StyleForm>
				<StyleInput type="text" placeholder="search..." onChange={this.handleFilterTextChanged}/><br/>
				<input id="showstock" type="checkbox"/>
				<label >Only show products in stock</label>
			</StyleForm>
		);
	}
}

export default SearchBar;
