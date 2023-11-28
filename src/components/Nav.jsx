import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import home from '../../public/assets/media/img/logo/home.png'


function Nav() {

    
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 56) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
        
    // }, []); // Empty dependency array ensures that this effect runs once on mount
    // const navbarClasses = `navbar ${scrolled ? 'navbar-scrolled' : ''}`;


    
    return (
        <nav className="navbar navbar-expand-lg  fixed-top " style={{backgroundColor:'var(--first-color)'}} id="navActive">
            <div className="container p-4">
                <Link to='/' className="navbar-brand text-capitalize">
                    <h1>hérold pommier</h1>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto justify-content-center  gap-5">
                        <li className="nav-item ">
                            <NavLink to="/competences" className="nav-link text-capitalize " aria-current="page">
                                <h2>compétences</h2>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link text-capitalize" >
                                <h2>portfolio</h2>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link text-capitalize">
                                <h2>contact</h2>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/" className="nav-link" style={{paddingBottom:".75rem"}}>
                                <img src={home} style={{width:"2.5rem", marginBottom:"1rem"}} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;