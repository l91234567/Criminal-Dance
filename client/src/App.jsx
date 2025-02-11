import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import './App.css'

import GameRoom from './components/gameRoom/GameRoom'
import Home from './components/Home'
function App() {
  return (
    <>
    
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gameRoom" element={<GameRoom/>} />
        </Routes>
      </BrowserRouter>

    </>

    
  )
}

export default App
