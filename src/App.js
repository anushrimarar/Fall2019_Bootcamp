import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({ 
      filterText: value 
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({ 
      selectedBuilding: id 
    });
  
  }

  deleteBuilding() {
    var data = this.state.data.filter (
      idBuilding => {
        return idBuilding.id !== this.state.selectedBuilding.id
      })
      this.setState ({ data : data })
  }

  addBuilding(idBuilding) { 
    var name = idBuilding.name;
    var code = idBuilding.code;
    var address = idBuilding.address;
    var latitude = idBuilding.coordinates.latitude;
    var longitude = idBuilding.coordinates.longitude;

  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 className = "title"><img src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/phone-directory-13-733472.png" height="70px"></img>
UF Directory App</h1>
        </div>

        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data = {this.props.data}
                selectedUpdate = {this.state.selectedBuilding}
                deleteBuilding = {this.deleteBuilding.bind(this)}
              />
            </div>
          </div>
          {/* <div>
            <RemoveBuilding
              data = {this.props.data}
              selectedUpdate = {this.state.selectedBuilding}
              // deleteBuilding = {this.deleteBuilding.bind(this)}
            />
          </div> */}
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
