import './index.css'

const TabItem = props => {
  const {items, updateThumbnail, activeTabId} = props
  const {displayText, tabId} = items
  const updateTabItems = () => {
    updateThumbnail(tabId)
  }

  const updateClassName =
    tabId === activeTabId ? 'tabName activeTab' : 'tabName'

  return (
    <li className="tab-list" onClick={updateTabItems}>
      <button className="tab-btn" type="button">
        <p className={updateClassName}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
