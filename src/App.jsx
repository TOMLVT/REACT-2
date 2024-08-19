import { useEffect } from "react"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"
import AOS from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 600,
      easing : 'ease-in-sine',
      delay : 100,
    } , [])
    AOS.refresh()
  })
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-200">
       <NavBar/>
       <Hero/>
    </div>
  )
}

export default App
