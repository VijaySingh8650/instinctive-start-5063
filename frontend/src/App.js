
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
// import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
    
        {/* <img width="20%" src="./logo.png" alt="" /> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
