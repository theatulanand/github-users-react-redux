
import './App.css';
import { Github } from './Components/Github';
import {Route , Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<Github/>}></Route>
      <Route path="/login" element= {<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
