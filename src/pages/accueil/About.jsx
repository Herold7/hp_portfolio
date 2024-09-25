import React from "react";
import portrait from "../../../public/assets/media/img/portrait/portrait.png";
import { Link } from "react-router-dom";


function About() {


    return (

        <section className="about container" data-aos="fade-down">
            <div className="card mt-5 p-5 shadow border-0 rounded-4" style={{ maxWidth: '100%', marginBottom: '5rem' }}>
                <div className="row g-0">
                    <div className="col-xl-5 ">
                        <img src={portrait} className="img-fluid rounded-start-4"
                            alt="portrait de hérold pommier" />
                    </div>
                    <div className="col-xl-7 container">
                        <div className="card-body">
                            <h2 className=" display-4 fw-bold mb-3 ps-5 text-center card-title">A propos de moi</h2>
                            <p className="card-text p-3 ms-3 fs-3 sm" id="aboutp">
                            Passionné par l'univers dynamique et créatif du développement web, 
                            je suis attiré par la possibilité de donner vie à des idées innovantes 
                            et de résoudre des problèmes de manière ingénieuse. Chaque projet représente 
                            pour moi une nouvelle aventure, où j'allie esthétique et fonctionnalité pour 
                            offrir une expérience utilisateur optimale. Curieux et doté d'une grande capacité d'adaptation, 
                            je suis toujours en quête d'opportunités pour enrichir mes connaissances et perfectionner mes compétences. 
                            Mon ambition est de contribuer activement au monde numérique en participant au développement 
                            de solutions innovantes et en relevant les défis passionnants qu'offre le domaine du web.
                            </p>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center gap-5 mt-5">
                            <Link to="/competences" className="btn btn-primary fs-1 btn-lg m-auto"
                                role="button">Compétences</Link>
                            <Link to="/portfolio" className="btn btn-primary fs-1 btn-lg m-auto"
                                role="button">Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;