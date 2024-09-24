import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import './assets/styles/style.css';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import SidePage from './components/SidePage';

function App() {

  return (
   <>
   <Header/>
   <div className="side">

      <div style={{display:"grid"}}>
          <SidePage/>
      </div>

      <div>
        <Routes>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    
   </div>
    
   </>
  );
}

export default App;
