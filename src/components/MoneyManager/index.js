import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    selectedOptionId: transactionTypeOptions[0].optionId,
    historyList: [],
    income: 0,
    expenses: 0,
    balance: 0,
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onSelectAmntType = event => {
    this.setState({selectedOptionId: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {titleInput, amountInput, selectedOptionId} = this.state
    if (selectedOptionId === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amountInput),
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amountInput),
      }))
    }
    this.setState(prevState => ({
      balance: prevState.income - prevState.expenses,
    }))
    const newHist = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type:
        selectedOptionId.charAt(0).toUpperCase() +
        selectedOptionId.slice(1).toLowerCase(),
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHist],
      titleInput: '',
      amountInput: '',
      selectedOptionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(each => each.id !== id)
    this.setState({historyList: filteredList})
  }

  render() {
    const {
      titleInput,
      amountInput,
      selectedOptionId,
      historyList,
      income,
      expenses,
      balance,
    } = this.state
    const details = {income, expenses, balance}
    return (
      <div className="bg">
        <div className="name-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div className="ull">
          <MoneyDetails details={details} />
        </div>
        <div className="btm-cons">
          <div className="inputs-con">
            <h1>Add Transaction</h1>
            <form>
              <div className="title-con">
                <label htmlFor="title1">TITLE</label>
                <input
                  id="title1"
                  type="text"
                  onChange={this.onChangeTitleInput}
                  value={titleInput}
                  placeholder="TITLE"
                />
              </div>
              <div>
                <label htmlFor="amnt1">AMOUNT</label>
                <input
                  id="amnt1"
                  type="text"
                  onChange={this.onChangeAmountInput}
                  value={amountInput}
                  placeholder="AMOUNT"
                />
              </div>
              <div className="optns-con">
                <label htmlFor="slct">TYPE</label>
                <select
                  id="slct"
                  className="slct-con"
                  onChange={this.onSelectAmntType}
                  value={selectedOptionId}
                >
                  {transactionTypeOptions.map(each => (
                    <option
                      className="optn"
                      value={each.optionId}
                      key={each.optionId}
                    >
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  onClick={this.onClickAddBtn}
                  className="add-btn"
                  type="button"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="his-con">
            <h1>History</h1>
            <div className="hdngs">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul>
              {historyList.map(each => (
                <TransactionItem
                  key={each.id}
                  transDetails={each}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
