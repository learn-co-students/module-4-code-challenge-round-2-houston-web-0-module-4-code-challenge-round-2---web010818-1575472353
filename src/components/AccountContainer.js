import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state={
      transactions: [],
      displayTransactions: []
    }

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions: transactions,
      displayTransactions: transactions
    }))
  }

  handleChange = (event) => {
    // your code here
    console.log(event)
    let filt = this.state.displayTransactions.filter((x) => x.description.toLowerCase().includes(event.toLowerCase()) || x.category.toLowerCase().includes(event.toLowerCase()))
    this.setState({
      transactions: filt
    })
  }

  

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList displayTransactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
