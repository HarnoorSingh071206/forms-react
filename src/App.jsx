
import Body from './components/body'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from './components/NewPage';

function App() {
  
  return (
   
    
    <div>

      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Body />} />
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
       
      
    </BrowserRouter>
    
    
    
    </div>
  )
}


export default App