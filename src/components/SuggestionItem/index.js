import './index.css'

const SuggestionItem = props => {
  const {data, fill} = props
  const {suggestion} = data
  const fillInput = () => {
    fill(suggestion)
  }
  return (
    <li className="list-item">
      <p className="list-item-description" onClick={fillInput}>
        {suggestion}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="list-item-icon"
        onClick={fillInput}
      />
    </li>
  )
}

export default SuggestionItem
