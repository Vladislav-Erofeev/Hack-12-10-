import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import GameUI from './components/GameUI/GameUI';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/game' element={<GameUI/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;