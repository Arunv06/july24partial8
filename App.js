import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './maincomponents/Home';
import Navbar from './maincomponents/Navbar';
import Simple from './tasklist/task1/Simple';
import State from './tasklist/task2/State';
import ConditionalRendComponent from './tasklist/task3/ConditionalRendComponent';
import FormsControlledComponents from './tasklist/task4/FormsControlledComponents';
import FetchApp from './tasklist/task5/FetchApp';
import UseEffectDataFetchingComponent from './tasklist/task6/UseEffectDataFetchingComponent';
import ParentComponent from './tasklist/task8/ParentComponent';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className='App'>
        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/simple' element={<Simple />} />
        <Route path='/state' element={<State />} />
        <Route path='/conditionalrendcomponent' element={<ConditionalRendComponent />} />
        <Route path='/formscontrolledcomponents' element={<FormsControlledComponents />} />
        <Route path='/fetchapp' element={<FetchApp />} />
        <Route path='/useeffectdatafetchingcomponent' element={<UseEffectDataFetchingComponent />} />
        <Route path='/parentcomponent' element={<ParentComponent />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
