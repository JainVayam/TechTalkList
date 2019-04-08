import React, { Component } from 'react';

import './App.css';
import TableComponent from './Table.jsx'

class App extends Component {
  state = {
    inputValue : '',
    addedItems: [],
  }

  handleInputChange = ( event ) => this.setState( { inputValue: event.target.value } )

  handleAddItem = ( ) => {
    const { state } = this
    const { addedItems, inputValue } = state
    addedItems.push( inputValue )
    this.setState( { addedItems, inputValue: ''  } )
  }

  deleteListItem = ( index ) => {
    const { state } = this
    const { addedItems } = state
    addedItems.splice( index, 1 )
    this.setState( { addedItems } )
  } 

  render() {
    const { state, handleInputChange, handleAddItem, deleteListItem } = this
    const { inputValue, addedItems } = state
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
              disabled={ inputValue === '' }
            >
              Add Item
            </button>
          </div>
          <TableComponent
            items={ addedItems } 
            handleDelete={ deleteListItem }/>
      </div>
    );
  }
}

export default App;
