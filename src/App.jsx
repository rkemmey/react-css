import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="container">
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
        <div className="box">Box 4</div>
        <div className="box">Box 5</div>
      </div>
      <div className="clear-box">
      <div className="float-box">Floating Box</div>
      <div className="text">This is some text that should not overlap the floating box.</div>
      </div> */}

    <h1>Hyperlinks and Input Fields</h1>

    <p>Check out these links:</p>
    <ul>
        <li><a href="https://www.google.com" target="_blank">Google</a></li>
        <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
        <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
    </ul>

    <form>
        <label>Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name"></input>
        <input type='submit'></input>
      </form>


    </>
  )
}

export default App
