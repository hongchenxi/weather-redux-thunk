import './App.css';
import { view as CitySelector } from './city-selector';
import { view as Weather } from './weather';
function App() {
  return (
    <div className='App'>
      <CitySelector />
      <Weather />
    </div>
  );
}

export default App;
