// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {income, expenses, balance} = details
  return (
    <>
      <div className="lst-item">
        <div className="img-con">
          <img
            className="amt-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="Balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p>Rs {balance}</p>
        </div>
      </div>
      <div className="lst-item">
        <div className="img-con">
          <img
            className="amt-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="Income"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p>Rs {income}</p>
        </div>
      </div>
      <div className="lst-item">
        <div className="img-con">
          <img
            className="amt-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="Expenses"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p>Rs {expenses}</p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
