import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import './Navbar.css'
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container header">
                        <div className='sideNav'>
                            <FontAwesomeIcon icon={faHamburger} />
                        </div>
                        <a className="navbar-brand" href="#">
                            <FontAwesomeIcon icon={faCodepen} /> AlgoAstra
                            {/* <img src="../public/user_icon.png" alt="" />  */}
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#my-nav"
                            aria-controls="my-nav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div id="my-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/about'>Blog</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav