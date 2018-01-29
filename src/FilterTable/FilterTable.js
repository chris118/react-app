import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyleDiv = styled.div`
	background: green;
	width: 100%;
	height: 300px;
`;

class FilterTable extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<StyleDiv>
				<SearchBar/>
			</StyleDiv>
		);
	}
}

export default FilterTable;