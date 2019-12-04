import React from 'react'
import Transaction from './Transaction.js' // importing specific transactions into transactions list 

const TransactionsList = (props) => { // sending props

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {props.displayTransactions.map(transaction => <Transaction transaction={transaction}/>)}

      </tbody>
    </table>
  )
}

export default TransactionsList

// mapping through the array of transactions to display them 