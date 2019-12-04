import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(){
    super()

    this.state={
      transactions: [],
      displayeTransactions: []
    }
  }

  // state = {
  //   transactions: [],
  //   displayTransactions: []
  // }
  

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions: transactions,
        displayTransactions: transactions
      })
    }) 
    }

  // handleChange(event) {
  //   // your code here
  // }
  searchTransaction = (text) => {
    console.log(text)
    let filtered = this.state.displayTransactions.filter((x) => x.description.toLowerCase().includes(text.toLowerCase())|| x.category.toLowerCase().includes(text.toLowerCase()))
    this.setState({
      transactions: filtered
    })
  }
  render() {

    return (
      <div>
        <Search searchTransaction={this.searchTransaction}/>
        
        <TransactionsList displayTransactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
