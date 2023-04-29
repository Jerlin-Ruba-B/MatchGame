import './index.css'

const ThumbNailItems = props => {
  const {thumbnails, updateScore} = props
  const {thumbnailUrl, id} = thumbnails

  const scoreUpdate = () => {
    updateScore(id)
  }

  return (
    <li className="thumbnail-container" onClick={scoreUpdate}>
      <button className="thumb-btn" type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbNail-img" />
      </button>
    </li>
  )
}
export default ThumbNailItems
