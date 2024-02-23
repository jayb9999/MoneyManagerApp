// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transDetails

  const onClickDeleteIcon = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="list-item">
      <div className="divv">
        <p>{title}</p>
      </div>
      <div className="divv">
        <p>{amount}</p>
      </div>
      <div className="divv">
        <p>{type}</p>
      </div>
      <div className="divv">
        <button
          onClick={onClickDeleteIcon}
          type="button"
          className="delete-btn"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
