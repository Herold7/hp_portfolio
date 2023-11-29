import { useState } from 'react'
import { Link } from "react-router-dom";
import bghero1 from './public/assets/media/img/bg/bghero1.png';
import Nav from './src/components/Nav'
import Footer from './src/components/Footer';
import portrait from './public/assets/media/img/portrait/portrait.png';
import code from './public/assets/media/img/logo/code.png';
import bdd from './public/assets/media/img/logo/bdd.png';
import cms from './public/assets/media/img/logo/cms.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <>
            <img className="bg-image img-fluid" src={bghero1} alt="" />
            <Nav />
            <main className="contain">
                <section className="hero container-fluid">
                    <div className="hero__data">
                        <h1 className="hero__description">
                            Bonjour, je m'appelle <span>hérold pommier</span>
                            <br />et je suis <span>développeur web</span>
                        </h1>
                        <ul>
                            <li>front <img src={code} style={{ width: "15rem", marginBottom: "1rem" }} alt="deux chevrons qui insert un slash" /></li>
                            <li>back <img src={bdd} style={{ width: "15rem", marginBottom: "1rem" }} alt="base de données" /></li>
                            <li>CMS <img src={cms} style={{ width: "15rem", marginBottom: "1rem" }} alt="deux chevrons qui insert un slash" /></li>
                        </ul>
                    </div>
                </section>
                <section className=" container" data-aos="fade-down">
                    <div className="card mt-5 p-5 shadow border-0 rounded-4" style={{ maxWidth: "100%", marginBottom: "5rem" }}>
                        <div className="row g-0">
                            <div className="col-lg-4 ">
                                <img src={portrait} className="img-fluid rounded-start-4"
                                    alt="portrait de hérold pommier" />
                            </div>
                            <div className="col-md-8 container">
                                <div className="card-body">
                                    <h2 className=" display-1 mb-3 ps-5 text-center card-title">A propos de moi</h2>
                                    <p className="card-text p-3 ms-3 fs-3 sm">
                                        Actuellement en formation, je suis passionné par l'univers dynamique et créatif du
                                        développement web.
                                        Ce que j'aime le plus dans le développement web, c'est la possibilité de donner vie à
                                        des idées innovantes et de résoudre des problèmes de manière créative. Chaque projet est
                                        pour moi une nouvelle aventure où je m'efforce d'allier esthétique et fonctionnalité
                                        pour offrir une expérience utilisateur optimale.

                                        Doté d'un esprit curieux et d'une forte capacité d'apprentissage, je suis constamment à
                                        la recherche de nouvelles opportunités pour élargir mes connaissances et affiner mes
                                        compétences. Mon ambition est de contribuer activement au monde numérique en participant
                                        au développement de solutions innovantes et en relevant les défis passionnants que le
                                        domaine du web offre.
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
            </main>
            <Footer />
        </>
    )
}

export default App;

