import { Link } from 'react-router-dom'
import style from './home.module.css'

const tes = () => {
    alert("Test!")
}

const Home = () => {
    return (
        <div className={style.container}>
        <div>
          <h1>Exercise 7 List</h1>
          <div className={style.list}>
              <div className={style.exerciseList}>
                <h2>Counter</h2>
                <button className={style.btn}><Link to='/Counter'>Click Me</Link></button>
              </div>
              <div className={style.exerciseList}>
                <h2>Stop Watch</h2>
                <button className={style.btn} onClick={tes}>Click Me</button>
              </div>
              <div className={style.exerciseList}>
                <h2>Filter</h2>
                <button className={style.btn} onClick={tes}>Click Me</button>
              </div>
              <div className={style.exerciseList}>
                <h2>Fetch</h2>
                <button className={style.btn} onClick={tes}>Click Me</button>
              </div>
              <div className={style.exerciseList}>
                <h2>Chat</h2>
                <button className={style.btn} onClick={tes}>Click Me</button>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Home;