import './App.css'

function App() {

  const tes = () => {
    alert("Test!")
  }

  return (
    <>
      <div className='container'>
        <div>
          <h1>Exercise 7 List</h1>
          <div className='list'>
            <div className='exercise-list'>
              <h2>Counter</h2>
              <button className='btn' onClick={tes}>Click Me</button>
            </div>
            <div className='exercise-list'>
              <h2>Stop Watch</h2>
              <button className='btn' onClick={tes}>Click Me</button>
            </div>
            <div className='exercise-list'>
              <h2>Filter</h2>
              <button className='btn' onClick={tes}>Click Me</button>
            </div>
            <div className='exercise-list'>
              <h2>Fetch</h2>
              <button className='btn' onClick={tes}>Click Me</button>
            </div>
            <div className='exercise-list'>
              <h2>Chat</h2>
              <button className='btn' onClick={tes}>Click Me</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
