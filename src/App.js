import React from 'react'
import './App.css'
import Addicon from './plus.png'

function App() {
  return (
    <div className='app-container'>
      <h2 className='app-tital'>To Do Smart</h2>
      <div className="list-group">

      </div>
      <div className='input-container'>
        <input type="text" className="input-todo" />
        <img src={Addicon} alt="" className="add-icon" />
      </div>
    </div>
  )
}

export default App
