import React from 'react';
import "../App.css"

class ViewBuilding extends React.Component {

	render() {
		const capturedBuilding = this.props.data.find(selected => {
			return selected.id === this.props.selectedBuildng.id
		})
		if (capturedBuilding === undefined) 
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		


		}

	}

export default ViewBuilding;
