import React, { Component } from 'react';
import styled from 'styled-components';

const StyleForm = styled.form`
	background: red;
	width: 100%;
	height: 100px;
	margin: 10px;
`;

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<StyleForm>
				<table align="center">
					<tr>
						<td>
							<input type="text" placeholder="search..."/><br/>
						</td>
					</tr>
					<tr>
						<td>
							<input id="showstock" type="checkbox"/>
							<label for="showsock">Only show products in stock</label>
						</td>
					</tr>
				</table>
			</StyleForm>
		);
	}
}

export default SearchBar;