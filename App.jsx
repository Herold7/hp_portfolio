import { useState } from 'react'
import bghero1 from './public/assets/media/img/bg/bghero1.png';
import Nav from './src/components/Nav';
import Footer from './src/components/Footer';
import About from './src/pages/accueil/About';
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
                            <li>back <img src={bdd} style={{ width: "11.5rem", marginBottom: "3rem" }} alt="base de données" /></li>
                            <li>CMS <img src={cms} style={{ width: "15rem", marginBottom: "1rem" }} alt="deux chevrons qui insert un slash" /></li>
                        </ul>
                    </div>
                </section>
                <About />
            </main>
            <Footer />
        </>
    )
}

export default App;

