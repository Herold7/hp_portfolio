import { useState } from 'react'
import Nav from '../../components/Nav';
import bghero1 from '../../../public/media/img/portrait/portrait.png';
import Footer from '../../components/Footer';

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
                    <li>front <i className="fa-solid fa-code lg"></i></li>
                    <li>back <i className="fa-solid fa-database lg"></i></li>
                    <li>CMS <i className="fa-brands fa-wordpress-simple lg"></i></li>
                </ul>
            </div>
        </section>
</main>
<Footer />
    </>
  )
}

export default App;
