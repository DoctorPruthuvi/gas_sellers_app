import React from 'react'
import { Link } from 'react-router-dom'
import Signinlink from './signinlink'
import Signoutlint from './signoutlink'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <Signinlink />
                <Signoutlint />
            </div>
        </nav>
    );
}

export default Navbar