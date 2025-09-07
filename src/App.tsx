import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="login-container">
      <h2>Login to your account</h2>
      <input className="line" type="text" placeholder="Username" />
      <input className="line" type="password" placeholder="Password" />
      <div className="container">
        <button>LOG IN</button>
        <a href="#">Forgotten password?</a>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper
        laoreet placerat. Nullam semper auctor justo, rutrum posuere odio
        vulputate nec.
      </p>
    </div>
  )
}

export default App
