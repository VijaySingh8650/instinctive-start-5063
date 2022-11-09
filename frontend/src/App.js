
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Admin/Navbar/Navbar';
// import AdminRouter from './Routers/Admin/AdminRouter';

function App() {
  return (
   
      <Routes>

        <Route path="/admin/*" element={<Navbar />}></Route>
      
      </Routes>
 
  );
}

export default App;
