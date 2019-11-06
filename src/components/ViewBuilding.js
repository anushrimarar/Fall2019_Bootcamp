import React from 'react';
import "../App.css"
import "./RemoveBuilding"

class ViewBuilding extends React.Component {

	render() {
		const capturedBuilding = this.props.data.find(selected => {
			return selected.id === this.props.selectedUpdate.id
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

		else if (capturedBuilding.coordinates) 
			return (
				<div>
				<div><h3> Building Name </h3> {capturedBuilding.name} </div>
				<div><h3> Code </h3> {capturedBuilding.code} </div>
				<div><h3> Address </h3> {capturedBuilding.address} </div>
				<div>
					<h3> Coordinates: </h3> 
					<h4> Latitude</h4> {capturedBuilding.coordinates.latitude}
					<h4> Longitude</h4> {capturedBuilding.coordinates.longitude}
				</div>
				<button type="button" class="btn btn-primary" onClick= {() => this.props.deleteBuilding()}> Destroy</button> 

				</div>

			)

		else 
			return (
				<div>
				<div><h3> Building Name </h3> {capturedBuilding.name} </div>
				<div><h3> Code </h3> {capturedBuilding.code} </div>
				<button type="button" class="btn btn-primary"  onClick= {() => this.props.deleteBuilding()}> Destroy</button> 
				</div>
			)
		}

	}

export default ViewBuilding;
