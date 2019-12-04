import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = { transactions:[], 
            displayTransactions:[] }
      

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions,
      displayTransactions: transactions
    }))
  }

  handleChange =(e) => {
    this.setState({
      displayTransactions: this.state.transactions.filter(transaction =>transaction.category.toLowerCase().includes(e.target.value.toLowerCase()) )
    })
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList displayTransactions={this.state.displayTransactions} />
      </div>
    )
  }
}

export default AccountContainer
