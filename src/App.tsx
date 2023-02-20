import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { ProjectPage } from "./components/ProjectPage"

function App() {

  return (
    <div className="px-10 lg:px-80">
      <NavBar/>
      <Home/>
      <About/>
      <ProjectPage/>
    </div>
  )
}

export default App
