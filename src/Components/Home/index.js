import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PopUp from '../PopUp'

import './index.css'
import RunnerDetails from '../RunnerDetails'
import RaceTrackPage from '../RaceTrackPage'

class Home extends Component {
  state = {initialList: [], name: '', speed: '', endTime: ''}

  onAddRunner = event => {
    event.preventDefault()
    const {name, speed} = this.state
    const endTime = (0.4 / parseInt(speed)) * 60
    const newList = {
      id: uuidv4(),
      name,
      speed,
      endTime,
    }
    this.setState(prevState => ({
      initialList: [...prevState.initialList, newList],
      name: '',
      speed: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSpeed = event => {
    this.setState({speed: event.target.value})
  }

  startRace = () => {
    const {initialList} = this.state
    return (
      <>
        <RaceTrackPage />
        <PopUp runnerInformation={initialList} />
      </>
    )
  }

  render() {
    const {initialList, name, speed} = this.state

    return (
      <div className="main-div">
        <div className="leftContainer">
          <h1 className="runner_details_heading">RUNNER DETAILS</h1>
          <p className="small_heading">* you can add 10 participants</p>
          <form onSubmit={this.onAddRunner}>
            <div className="nameDiv">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                id="nameInput"
                value={name}
                onChange={this.onChangeName}
                className="input"
              />
            </div>
            <div className="nameDiv">
              <label htmlFor="speedInput">Speed</label>
              <input
                type="text"
                id="speedInput"
                value={speed}
                onChange={this.onChangeSpeed}
                className="input"
              />
            </div>
            <div className="nameDiv">
              <label htmlFor="timeInput">StartTime</label>
              <input
                type="text"
                id="timeInput"
                placeholder="10:00"
                className="input"
              />
            </div>
            <button type="submit" className="add_button">
              + ADD RUNNER
            </button>
          </form>
        </div>
        <div className="right_container">
          <h1 className="runner_details_heading">LIST OF PARTICIPANTS</h1>
          <div className="header_bar">
            <p>Name</p>
            <p>Speed</p>
            <p>StartTime</p>
            <p>EndTime</p>
          </div>
          <div className="list-container">
            <ul>
              <li className="list-style">
                {initialList.map(eachItem => (
                  <RunnerDetails details={eachItem} key={eachItem.id} />
                ))}
              </li>
            </ul>
          </div>
          <hr />
          <button
            type="button"
            className="race-button"
            onClick={this.startRace}
          >
            Start Race --`&gt;`
          </button>
        </div>
      </div>
    )
  }
}
export default Home
