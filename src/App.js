const api = {
  key: 'fd9d6aab2c38c5938add09f03d6455aa',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {


  return (
    <div className="App">
      <main>
        <section class="search-section">
          <input
            type="text"
            class="search-input"
            placeholder="Type the city"
          />
          <button class="search-btn">Check</button>
        </section>
        <section class="information">
          <div class="data">London | 11.04.2022 | 10°c</div>
        </section>
      </main>
    </div>
  );
}

export default App;
