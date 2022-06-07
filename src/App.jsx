import './assets/styles/css/App.css'
import Home from './components/Home'

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  

  return (
      <HashRouter>
        <Routes>
            <Route path='/' element={ <Home/> } exact/>
        </Routes>
      </HashRouter>
  )
}

export default App
