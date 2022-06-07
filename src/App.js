import {BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Listado from './components/Listado';


function App() {
  return (
    <>

      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/listado' element={<Listado/>}/>
      </Routes>
      

    </>
  );
}

export default App;
