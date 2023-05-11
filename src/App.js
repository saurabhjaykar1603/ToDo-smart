import React, { useState } from 'react'
import './App.css'
import Addicon from './plus.png'

function App() {
  const [mylist, setMyList,] = useState([]);

  return (
    <div className='app-container'>
      <h2 className='app-tital'>To Do Smart</h2>

      <div className="list-group">
        {
          mylist.map((task) => {
            return (
              <div className="task">
                {task}
              </div>
            )
          })
        }
      </div>

      <div className='input-container'>
        <input type="text" className="input-todo" />
        <img src={Addicon} alt="" className="add-icon" />
      </div>
    </div>
  )
}

export default App
