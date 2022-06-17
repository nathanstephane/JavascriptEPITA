import React from 'react'
import Greeting from './components/Greeting'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import Users from './components/Users'
import Home from './components/Home'

function App() {
  const age:number = 10  
  return (
    <>
    <div>App</div>
  <BrowserRouter>
  <div id="nav">
      <Link to="/">Home</Link>
      
      <Link to="/users">Users</Link>
  </div>
  <Routes>
    <Route path="/" element={<Greeting firstName="Dark" lastName="Vader" age={12} />}/>
    <Route path="/users" element={<Users/>}/>
  </Routes>
  </BrowserRouter>
    
   
    
    
    </>
  )
}

export default App