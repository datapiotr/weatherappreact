import { useState } from 'react';

const api = {
  key: 'fd9d6aab2c38c5938add09f03d6455aa',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [city, setCity] = useState('')
  const [temp, setTemp] = useState({})


  const getDate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

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
          <button className="search-btn">Check</button>
        </section>
        <section className="information">
          {(typeof temp.main != 'undefined') ? (
            <div className="data">{temp.name} | {getDate(new Date())} | {Math.round(temp.main.temp)}°c</div>
          ) : ('')}
        </section>
      </main>
    </div>
  );
}

export default App;
