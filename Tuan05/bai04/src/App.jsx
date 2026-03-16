import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [dataShow, setDataShow] = useState([]);
  const [search, setSearch] = useState('');

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(()=> {
    async function fetchData() {
      var res = await fetch(url);
      var data = await res.json();
      setData(data);
      setDataShow(data);

    }
    fetchData();
  }, [])

  function handleSearch(e) {
    var filter = data.filter((item) => {
      return item.title.includes(e.target.value);
    })

    setSearch(e.target.value);
    setDataShow((filter));
  }

  return (
    <>
      <input type='text' value={search} onChange={handleSearch} placeholder='search' />
      {
        dataShow.map((item) => {
          return <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.body}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
