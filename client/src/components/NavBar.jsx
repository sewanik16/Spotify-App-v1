import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <>
            <div className="navbar navbar-dark bg-dark">
                <div className="container">
                            <Link to="/" className="navbar-brand text-warning">
                                Home
                            </Link>
                            <div className="rounded-pill bg-light p-1">
                            <i className="fa fa-search text-danger w-10 mx-2"></i>
                            <input type="text" className="navbar-input w-75 border-0" placeholder=" Search Songs..." style={{outline:"0"}}/>
                            </div>
                </div>
            </div>
        </>
    )
}
export default NavBar;