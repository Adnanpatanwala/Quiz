 
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Home';
 

function App() {
  return ( 
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
