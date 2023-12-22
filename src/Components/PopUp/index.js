import Popup from 'reactjs-popup'
import PopUpCard from '../PopUpCard'

import 'reactjs-popup/dist/index.css'

import './index.css'

const PopUp = props => {
  const {runnerInformation} = props
  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button className="trigger-button" type="button">
            View Results
          </button>
        }
      >
        <div>
          {runnerInformation.map(eachItem => (
            <PopUpCard details={eachItem} />
          ))}
        </div>
      </Popup>
    </div>
  )
}
export default PopUp
