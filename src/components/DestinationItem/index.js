// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-item">
      <img alt={name} className="destination-img" src={imgUrl} />
      <p className="destination-name">{name}</p>
    </li>
  )
}
export default DestinationItem
