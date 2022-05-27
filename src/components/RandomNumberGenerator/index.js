// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="border-container">
          <h1 className="heading">Random Number </h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onClickButton} className="button">
            Generate
          </button>
          <p className="para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
