import Experience from '../components/Experience'
import WorkProcess from '../components/WorkProcess'
import FunFacts from '../components/FunFacts'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

function Home() {
  return (
    <>
      <Hero/>
      <hr />
      <Experience />
      <hr />
      <WorkProcess />
      <hr />
      <FunFacts />
      <hr />
      <Projects />
      <hr />
      <Contact />
    </>
  )
}

export default Home