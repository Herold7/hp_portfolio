import React from "react";
import { useState } from 'react';
import Nav from "../../components/Nav";
import Project from "./Project";
import { Link } from "react-router-dom";
import CV from '../../../public/assets/media/img/cv/CV_Herold_Pommier-CDA.pdf'
import Footer from "../../components/Footer";



function Portfolio() {

    return (
        <>
            <Nav />
            <main className="contain">
                <h1>
                    portfolio
                </h1>

                <Project />

                <section className=" p-5 m-5 bd-example m-5 shadow border-0 rounded-4" style={{ backgroundColor: 'var(--title-color)' }}>
                    <div className="card text-center" >
                        <div className="card-body ">
                            <h5 className="card-title display-2 fw-bold ">En route pour de nouveaux projets</h5>
                            <Link to="/contact" className="btn fs-1 m-5 px-5 text-white"
                                style={{ backgroundColor: 'var(--text-color)' }}>Prenons contact</Link>
                            <a href={CV} download className="btn fs-1 m-5 px-5 text-white"
                                style={{ backgroundColor: 'var(--first-color)' }}>Téléchargez mon cv</a>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Portfolio;
