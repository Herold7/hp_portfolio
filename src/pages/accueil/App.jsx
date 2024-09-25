import bghero1 from '../../../public/assets/media/img/bg/bghero1.png';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import About from './About';
import data from '../../../public/assets/media/img/logo/database-fill.svg';
import code from '../../../public/assets/media/img/logo/code-slash.svg';
import cms from '../../../public/assets/media/img/logo/wordpress-plain2.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <img className="bg-image img-fluid rounded" src={bghero1} alt="" />
            <Nav />
            <main className="contain">
                <section className="hero container-fluid">
                    <div className="hero__data">
                        <h1 className="hero__description">
                            Bonjour, je m'appelle <span>hérold pommier</span>
                            <br />et je suis <span>développeur web</span>
                        </h1>
                        <ul>
                            <li>front <img src={code} alt="deux chevrons qui insert un slash" /></li>
                            <li>back <img src={data} alt="base de données" /></li>
                            <li>CMS <img src={cms} alt="deux chevrons qui insert un slash" /></li>
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

