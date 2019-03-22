import {h, render, Component} from 'preact'
import styled from 'styled-components'

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
    return (
      <Wrapper>
        <Title>{this.formatEpoch(this.state.time)}</Title>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background: #333;
`

const Title = styled.div`
  font-size: 2rem;
  font-family: terminus;
  text-align: center;
  color: #b51e59;
`

export default Clock
