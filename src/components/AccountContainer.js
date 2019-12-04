import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: transactions,
      transactionsCopy: transactions
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(json => {
      this.setState({
        transactions: json,
        transactionsCopy: json
      })
    });
  }

  handleChange = (e) => {

    let value = e.target.value.toLowerCase()

    let copy = this.state.transactionsCopy

      // let desLowerCase = copy.map(trans => trans.description.toLowerCase())

    let filteredTransactions = copy.filter(trans => {

      let transDesLower = trans.description.toLowerCase()
      let transCatLower = trans.category.toLowerCase()

      return transDesLower.includes(value) || transCatLower.includes(value)
    });
    
    this.setState({ 
      transactions: filteredTransactions 
    })

  } 

  render() {
    // console.log(this.state.transactions)
    
    const transactions = this.state.transactions
    
    // console.log(transactions)

    return (
      <div>
        <Search onChange={(e) => this.handleChange(e)} />
        <TransactionsList transactions={transactions} />
      </div>
    )
  }
}

export default AccountContainer
