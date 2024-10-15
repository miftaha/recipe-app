import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  )
}
export default App
