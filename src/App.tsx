import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/5-days-forecast' element={<Forecast />} />
      </Routes>
    </div>
  );
}

export default App;
