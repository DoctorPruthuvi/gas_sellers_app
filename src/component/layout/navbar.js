import React from 'react'
import { Link } from 'react-router-dom'
import Signinlink from './signinlink'
import Signoutlint from './signoutlink'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <Signinlink profile={profile} /> : <Signoutlint />;

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">HGMS</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)