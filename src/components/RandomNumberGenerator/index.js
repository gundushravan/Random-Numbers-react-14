import {Component} from 'react'
import './index.css'
import {deflate} from 'zlib'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumbers = () => Math.ceil(Math.random() * 100)

  onClickRandom = () => {
    const randomNumbers = this.getRandomNumbers()
    this.setState({count: randomNumbers})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Random Numbers</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onClickRandom}>
            Generate
          </button>
          <p className="header-result">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
