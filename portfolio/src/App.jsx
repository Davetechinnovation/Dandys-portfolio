import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Testimonial1 from './components/Testimonial1'

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/testimonial1' element={<Testimonial1/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
