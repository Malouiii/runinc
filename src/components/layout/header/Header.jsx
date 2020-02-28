import React from 'react'
import Nav from './nav/Nav'
import { NavLink } from 'react-router-dom'
import Logo from '../../../gfx/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <NavLink to="/">
                        <img src={Logo} alt="RunInc logo" title="RunInc logo" className="img-fluid" id="logo"/>
                    </NavLink>
                </div>
                <div className="col-lg-5 col-12">
                    <Nav />
                </div>
                <div className="col-lg-4 col-12">
                    <form>
                        <input className="input" type="search" placeholder="" aria-label="Search" required></input>
                        <button className="button" type="submit">SEARCH</button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header
