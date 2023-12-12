
import { Outlet } from 'react-router-dom'

function Overlay() {
  return (
    <div>
        <h1>Overlay</h1>
        <Outlet/>
    </div>
  )
}

export default Overlay