import React from 'react';

import './Table.css'

function Table ( props ) {
  const tableRenderer = ( items ) => items.map( ( item, index ) => (
    <tr className="Table-rows">
      <td className="Item-column">
        { item }
      </td>
      <td>
        <button
          className="Delete-btn"
          onClick={ () => props.handleDelete( index ) }  
        >
          Remove
        </button>
      </td>
    </tr>
  ) )

  return (
    <table className="Table">
      { tableRenderer( props.items ) }
    </table>
  )
}

export default Table
