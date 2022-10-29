import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from './Home';
import ObjectForm from './Components/ObjectsChanges'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route   exact path='/' element={<Homes />} />
        <Route   exact path='/ObjectChange'  element={<ObjectForm />}    />

        {/* <Route   exact  path='/ObjectChange' element={<ReducerOnObjects  />}  /> */}
    

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;