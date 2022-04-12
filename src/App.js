import { useState } from 'react';

const api = {
  key: 'fd9d6aab2c38c5938add09f03d6455aa',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [city, setCity] = useState('')
  const [temp, setTemp] = useState({})

  const date = new Date()

  const getTemp = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setTemp(result)
          setCity('')
          console.log(result)
        })
    }
  }

  return (
    <div className="App">
      <main>
        <section className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Type the city"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getTemp}
          />
          <button className="search-btn" onClick={getTemp}>Check</button>
        </section>
        <section className="information">
          {(temp.cod === 200) ? (
            <div>{temp.name} | {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} | {Math.round(temp.main.temp)}°c</div>
          )
            : (temp.cod === '404') ? (<div>{temp.message}</div>)
              : (<div>Welcome to weather app. Type the city to check current temperature in it.</div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
