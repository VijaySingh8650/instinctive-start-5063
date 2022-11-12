
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Admin/Navbar/Navbar';
import SignUp from './Pages/Signup/Signup';
import AllRoutes from './Routers/AllRoutes';
// import AdminRouter from './Routers/Admin/AdminRouter';

function App() {
  return (
   <>
   <AllRoutes/>
      <Routes>

        <Route path="/admin/*" element={<Navbar />}></Route>
      
      </Routes>
      </>
  );
}

export default App;
