import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, checkImageMatch} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickButton = () => {
    checkImageMatch(id)
  }

  return (
    <li className="thumb-item">
      <button type="button" className="thumb-button" onClick={onClickButton}>
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
