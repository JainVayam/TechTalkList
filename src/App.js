import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputValue : '',
    addedItem: '',
  }

  handleInputChange = ( event ) => this.setState( { inputValue: event.target.value } )

  handleAddItem = ( ) => {
    const { state } = this
    const { inputValue } = state
    this.setState( { addedItem: inputValue, inputValue: '' } )
    // addedItems.push( inputValue )
    // this.setState( { addedItems, inputValue: ''  } )
  }
  render() {
    const { state, handleInputChange, handleAddItem } = this
    const { inputValue, addedItem } = state
    return (
      <div className="App">
        <header className="App-header">
          To-Do List 
        </header>
          <div className="Component-two">
            <input
              value={ inputValue }
              onChange={ handleInputChange }
              placeholder="Enter Items"
              className="List-input"
              />
            <button
              className="Add-btn"
              onClick={ handleAddItem }
            >
              Added Item
            </button>
          </div>
          <h2
            className="Added-item">
            The current item is : { addedItem }
          </h2>   
      </div>
    );
  }
}

export default App;
