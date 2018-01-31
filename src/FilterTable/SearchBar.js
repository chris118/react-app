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
	}
	render() {
		return (
			<StyleForm>
				<StyleInput type="text" placeholder="search..."/><br/>
				<input id="showstock" type="checkbox"/>
				<label >Only show products in stock</label>
			</StyleForm>
		);
	}
}

export default SearchBar;
