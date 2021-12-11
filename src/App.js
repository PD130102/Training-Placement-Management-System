import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
       <Routes>
         <Route path='/Login'exact element={<Login/>}>
         </Route>
         <Route path='/Register' element={<Register/>}>
         </Route>
       </Routes>
        </Router>
      </header>
    </div>
  );
}
export default App;
