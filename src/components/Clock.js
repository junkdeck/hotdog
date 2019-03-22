import {h, render, Component} from 'preact'

class Clock extends Component {
  state = {
    time: Date.now(),
  }

  componentDidMount() {
    this.timer = setInterval(this.updateClock, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  updateClock = () => {
    this.setState(prev => ({
      time: prev.time + 1000,
    }))
  }

  formatEpoch = time => new Date(time).toLocaleTimeString()

  render() {
    return <div>{this.formatEpoch(this.state.time)}</div>
  }
}

export default Clock
