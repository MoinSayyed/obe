import './App.css';
// import Navbar from './components/Navbar/Navbar';
import LoginForm from './Pages/login/LoginForm';
import AdminControl from './Pages/adminControl/AdminControl';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/login" element = {<LoginForm/>}></Route>
          <Route path = "/adminControl" element = {<AdminControl/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
