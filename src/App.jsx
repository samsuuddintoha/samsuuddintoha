import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Experience from './components/Experience'
import WorkProcess from './components/WorkProcess'
import Projects from './components/Projects'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div id='layout'>
        
        <div className='navbarBg'>
          <Nav/>
        </div>

        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/experience' element={<Experience />} />
            <Route path='/work-process' element={<WorkProcess />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>

          <Footer/>
      </div>
    </>
  )
}

export default App
