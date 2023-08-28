import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Counter from './components/pages/Counter'

function App() {

  return (
    <>
      <div className='container'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Counter' element={<Counter />} />
        </Routes> 
      </div>
                
    </>
  )
}

export default App
