import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    
    const getArtists = async () => {
    const response = await axios.get('http://localhost:8000')
    setData(response.data)
    }

    getArtists()
    console.log(data)
  }, [])
  

  if(data) {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Django React Auth Lesson </h1>
        </header>
  
        <div>
        {data.map((artist) => (
          <div>
          <h3> {artist.name} </h3>
          <h5> {artist.nationality} </h5>
          </div>
        ))}
      </div>
      
      </div>
    );
   
} else {

  return <h2> loading please wait</h2>
}
}
export default App;
