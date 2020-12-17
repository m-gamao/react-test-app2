import React from 'react';
import Form from './components/Form.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderFood: 'Placing Order for ',
      showForm: false,
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleToggleButton = (event) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.showForm ?
        
        <Form
         orderFood={this.state.orderFood}
         customerName={"Customer"}
         handleSubmit={this.handleFormSubmit}
         />
         : 
         <div>
           <h4>No Form Shown</h4>
           <button id="btn" onClick={this.handleToggleButton}>Toggle Form</button>
         </div>
      }

      <br></br>
      </div>
    )
  }
}

export default App;
