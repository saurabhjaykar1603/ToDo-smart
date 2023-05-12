import React, { useState } from 'react'
import './App.css'
import Addicon from './plus.png'

function App() {
  const [mylist, setMyList] = useState([]);
  const [task, setTask] = useState('');

  function addTask() {
    // The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

    setMyList([...mylist, task]);
    setTask('')
  }
  function deletTask(index) {
    mylist.splice(index, 1);
    setMyList([...mylist])

  }

  return (
    <div className='app-container'>
      <h2 className='app-tital'>To Do Smart</h2>

      <div className="list-group">
        {
          mylist.map((t, index) => {
            return (
              <div className="task">
                {t} <br />
                <button onClick={() => {
                  deletTask(index)
                }}>Delet</button>
              </div>
            )
          })
        }
      </div>

      <div className='input-container'>
        <input type="text" className="input-todo" placeholder='Enter Task' value={task} onChange={(e) => {
          setTask(e.target.value);
        }} />
        <img src={Addicon} alt="" className="add-icon" onClick={addTask} />
      </div>
    </div>
  )
}

export default App
