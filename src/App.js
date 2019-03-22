import {h, render, Component} from 'preact'

import Clock from './components/Clock'

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    )
  }
}

export default App
