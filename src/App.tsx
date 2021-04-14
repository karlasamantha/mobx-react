import React from 'react'
import logo from './logo.svg'
import './App.css'

import { observer } from 'mobx-react'
import { CountStore } from './stores/CountStore'
import { action } from 'mobx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{CountStore.count}</p>
        <button onClick={action(e => {
          e.stopPropagation()
          CountStore.increment()
        })}>Increment</button>
        <button onClick={() => CountStore.decrement()}>Decrement</button>
      </header>
    </div>
  )
}

export default observer(App)
