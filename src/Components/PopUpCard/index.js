import './index.css'

const PopUpCard = props => {
  const {details} = props
  const {name, speed, endTime} = details
  return (
    <div>
      <h1>SCORE BOARD</h1>
      <div className="header_bar">
        <p>Name</p>
        <p>Speed</p>
        <p>StartTime</p>
        <p>EndTime</p>
      </div>
      <div className="small_card">
        <p>{name}</p>
        <p>{speed} KM/H</p>
        <p>06:00</p>
        <p>{endTime}</p>
      </div>
    </div>
  )
}

export default PopUpCard
