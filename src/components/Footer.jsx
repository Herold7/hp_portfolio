import React from "react";
import { Link } from "react-router-dom";
import linkedin from '../../public/assets/media/img/logo/linkedin2.png';
import gitHub from '../../public/assets/media/img/logo/github.png';



function Footer() {

    return (

        <footer className=" bg-black text-white py-4 mt-auto" style={{background:'linear-gradient(269deg, #d6974d, #60768a, #277aff)'}}>
        <div className="container px-5">
            <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                <div className="col-auto">
                    <div className="small m-0">Hérold Pommier &copy; Tous droits réservés 2023</div>
                </div>
                <div className="col-auto">
                    <Link to ="/contact" className="small link-underline link-underline-opacity-0"
                        style={{fontSize:'2rem',color:'#000'}}>contact</Link>
                    <span className="mx-1">&middot;</span>
                    <Link to="https://linkedin.com/" className="small"><img src={linkedin}
                            style={{width:'2.3rem',marginBottom:'.5rem'}} /></Link>
                    <span className="mx-1">&middot;</span>
                    <Link to="https://github.com" className="small"><img src={gitHub}
                            style={{width:'2.5rem',marginBottom:'.5rem'}} /></Link>
                </div>
            </div>
        </div>
    </footer>

    )
}

export default Footer