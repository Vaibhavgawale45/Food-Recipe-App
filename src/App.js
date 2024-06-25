import './App.css';
import { Route,Routes } from 'react-router-dom';
import Mainpage from './Component/Mainpage'
import Mealinfo from './Component/Mealinfo';
 

function App() { 
  return (
     
    // <Mainpage/>
     
     <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
     </Routes>
      
  );
}
 
export default App;
