import { Link } from 'react-router-dom'
import { useState } from 'react'
import style from './counter.module.css'

function Counter() {
const [count, setCount] = useState(0)

const increase = () => {
    setCount(count + 1)
}

const decrease = () => {
    setCount(count - 1)
}

return (
    <>
        <div>
            <h1>Counter</h1>
            <div className={style.wrapper}>
                <button className={style.btnDecrease} onClick={decrease}>-</button>
                <h2>{count}</h2>
                <button className={style.btnIncrease} onClick={increase}>+</button>
            </div>
            <button className="btn" style={{marginTop:'20px'}}><Link to='/'>Home</Link></button>
        </div>
    </>
  )
}

export default Counter
