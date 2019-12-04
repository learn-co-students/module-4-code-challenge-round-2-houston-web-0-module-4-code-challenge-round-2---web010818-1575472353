import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData' // importing fake data that we dont need to import from 

class AccountContainer extends Component { // which holds all the information 

  constructor() {
    super()
    this.state = {
      transactions: [], // state initially empty for specific transactions
      displayTransactions: [] // state initilally empty to display transaction 
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){ // fetching all the transactions 
    fetch("https://boiling-brook-94902.herokuapp.com/transactions") // url api which has all transactions stored 
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions: transactions, // setting state value to transactions
        displayTransactions: transactions // setting state value to display transactions 
      })
    })
  }



  handleChange = (text) => { // when inputing text within the search handle 
    // your code here
    console.log(text)
    let display = this.state.displayTransactions.filter((transaction) => transaction.description.toLowerCase().includes(text.toLowerCase())|| transaction.category.toLowerCase().includes(text.toLowerCase()))
    // filtering display texts to be case sensitive for description and categroy 
    this.setState({
      transactions: display
    })
  }

  render() {
// rendering search handle to filter, and transaction list to display all transactions 
    return (
      <div>
      <Search handleChange={this.handleChange} /> 
      <TransactionsList displayTransactions={this.state.transactions}/> 
      </div>
    )
  }
}

export default AccountContainer
