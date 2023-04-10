import './index.css'

const TabItem = props => {
  const {tabDetails, isTabActive, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isTabActive ? 'active-tab' : ''

  const onClickButton = () => {
    onClickTab(tabId)
  }

  return (
    <li className={`tab-item ${activeTabClassName}`}>
      <button
        type="button"
        className={`tab-button ${activeTabClassName}`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
