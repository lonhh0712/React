import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const url = "https://69301c28778bbf9e006fdcc1.mockapi.io/list_todo";

  useEffect(() => {
    async function fetchData() {
      var res = await fetch(url);
      var data = await res.json();
      setData(data);
      console.log(data);
    }
    fetchData();
  }, [])

  return (
    <>
      <table border= '1'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form action=""></form>
    </>
  )
}

export default App
