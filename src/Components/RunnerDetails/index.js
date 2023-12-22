import './index.css'

const RunnerDetails = props => {
  const {details} = props
  const {name, speed} = details
  return (
    <div className="small_card">
      <p>{name}</p>
      <p>{speed} KM/H</p>
      <p>-</p>
      <p>-</p>
    </div>
  )
}

export default RunnerDetails
