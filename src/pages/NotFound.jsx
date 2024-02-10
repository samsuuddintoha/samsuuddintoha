import { Link } from 'react-router-dom'
import { IoChevronBackOutline } from "react-icons/io5";


function NotFound() {
  return (
    <>
      <div id="not-found">
        <div className="container">
          <div className="row">
            <div className="not">
              <h1>404 Error!</h1>
              <p>Page Not Found.</p>
              <Link to='/' className='link'><IoChevronBackOutline/>Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound