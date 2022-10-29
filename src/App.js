import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from './Home';
import ObjectForm from './Components/ObjectsChanges';
import StateList from './Components/StateChanges'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route   exact path='/' element={<Homes />} />
        <Route   exact path='/ObjectChange'  element={<ObjectForm />}    />

        <Route   exact  path='/StateChange' element={<StateList  />}  />
    

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;