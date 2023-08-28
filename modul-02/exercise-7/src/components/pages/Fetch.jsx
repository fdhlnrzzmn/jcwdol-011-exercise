import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import style from './fetch.module.css'

function Fetch() {
const [data, setData] = useState([])

useEffect(() => {
    const getData = async () => {
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await request.json();

        setData(response);
    }
    getData();
}, []);

return (
    <>
        <div>
            <div className={style.wrapper}>
                <h1>Fetch API From JSON Placeholder</h1>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>Edit Delete</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <button className="btn" style={{marginTop:'20px'}}><Link to='/'>Home</Link></button>
        </div>
    </>
  )
}

export default Fetch
