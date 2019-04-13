import React, { Component } from 'react';
import { Button, Card, Classes, Elevation, Icon, H4, H5, H6} from "@blueprintjs/core";


const finePrintStyle = {
	color: "gray",
	fontSize: "0.9em",
}

const cardStyles = {
	margin: "30px 200px",
	display: "flex",
	alignItems: "flex-start",
	flexWrap: "nowrap"
}

const cardCol1 = {
	width: "60%",
}

const cardCol2 = {
	textAlign: "right",
	fontSize: "1.1em",
	width: "20%",
}


const cardCol3 = {
	textAlign: "right",
	width: "20%",
}

const mockSearchResults = {}

class SearchResultCard extends Component {
	cardOptions = {
		elevation: 1,
		interactive: true,
	};


	render() {

		const {resultData} = this.props

		return <Card {...this.cardOptions} style={cardStyles}>
			<div style={cardCol1}>

				<H4>
						<a href="/overview">Analytical applications</a>
				</H4>
				<p>
						User interfaces that enable people to interact smoothly with data, ask better questions, and
						make better decisions. Long description ong description user interfaces that enable people to interact smoothly with data, ask better questions, and
						make better decisions.
				</p>
				<p style={finePrintStyle}>
					More sample sample sample sample text

				</p>

			</div>

			<div style={cardCol2}>
				Image
			</div>

			<div style={cardCol3}>
				<Icon icon="star" iconSize={14}/>
				<span> 1000</span>
			</div>

		</Card>
	}
}

class SearchResult extends Component {

	render() {
		const mockData = ['a',"b","c"];
		const resultsData = [];

		for (const [index, value] of mockData.entries()) {
    	resultsData.push(<SearchResultCard></SearchResultCard>)
  	}

		return <div>

			{resultsData}
		</div>;
	}
}

export default SearchResult;
