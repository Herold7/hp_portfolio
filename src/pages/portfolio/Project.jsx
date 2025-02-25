import React from "react";
import { useState } from 'react';
import portfolioevent from "../../../public/assets/media/img/bg/portfolioevent.png";
import portfolioexistentia from "../../../public/assets/media/img/bg/portfolioexistentia.png";
import portfoliomariage from "../../../public/assets/media/img/bg/portfoliomariage.png";
import portfolioplatine from "../../../public/assets/media/img/bg/portfolioplatine.png";
import portfoliochatbot from "../../../public/assets/media/img/bg/portfoliochatbot.png";
import portfolioartemis from "../../../public/assets/media/img/bg/portfolioartemis.png";
import portfoliobnb from "../../../public/assets/media/img/bg/portfoliobnb.png";
import portfoliotinycrm from "../../../public/assets/media/img/bg/portfoliotinycrm.png";
import portfoliocoryphee from "../../../public/assets/media/img/bg/portfoliocoryphee.png";
import portfoliomyairport from "../../../public/assets/media/img/bg/portfoliomyairport.png";

function Project() {
    const siteProject = [{
        id: 1,
        name: "BnB",
        technology: "Symfony, Sqlite",
        description: "Location d'appartement à l'international",
        picture: portfoliobnb,
        alt: "site de BnB",
        link: "https://github.com/Herold7/bnb"
    },
    {
        id: 2,
        name: "Artemis",
        technology: "PHP, Mysql",
        description: "solution numérique de gestion de bibliothèque",
        picture: portfolioartemis,
        alt: "site de artemis",
        link: "https://github.com/Herold7/artemis-cda"
    },
    {
        id: 3,
        name: "Chatbot dev",
        technology: "React, Vite, api openai",
        description: "Chatbot spécialisé dans les langages dev",
        picture: portfoliochatbot,
        alt: "site du chatbot",
        link: "https://cda-tp-validation-1.vercel.app"
    },
    {
        id: 4,
        name: "Coryphée",
        technology: "Symfony, Bootsrap, MySQL",
        description: "Annuaire d'artiste",
        picture: portfoliocoryphee,
        alt: "site de coryphée",
        link: "https://github.com/Herold7/Coryph-e"
    },
    {
        id: 5,
        name: "Myairportacademy",
        technology: "Wordpress",
        description: "Site de formation aéroportuaire",
        picture: portfoliomyairport,
        alt: "site du myairportacademy",
        link: "https://myairportacademy.com"
    },
    {
        id: 6,
        name: "Makeda_for_event",
        technology: "Wordpress",
        description: "Site internet d'évènementiel musical",
        picture: portfolioevent,
        alt: "site de makeda for event",
        link: "https://www.makeda-for-event.com"
    },
    {
        id: 7,
        name: "Tiny-crm",
        technology: "Symfony, api stripe",
        description: "Service BtoB de paiement",
        picture: portfoliotinycrm,
        alt: "Application web Tiny-crm",
        link: "https://github.com/Herold7/tinycr8"
    },
    {
        id: 8,
        name: "Existentia",
        technology: "HTML, Js, JQuery, PHP, Bootstrap",
        description: "Site internet de conciergerie de luxe vers le Mozambique",
        picture: portfolioexistentia,
        alt: "site de existentia services",
        link: "https://www.existentiaservices.com"
    },
    {
        id: 9,
        name: "Makeda_for_mariage",
        technology: "Wordpress",
        description: "Site de prestations musicales pour le mariage",
        picture: portfoliomariage,
        alt: "site de makeda for mariage",
        link: "https://www.makeda-for-mariage.com"
    },
    {
        id: 10,
        name: "Platine_Music",
        technology: "Wordpress",
        description: "E-commerce de vente de cd, vynil, K7 de musique hip-hop des années 90's",
        picture: portfolioplatine,
        alt: "site de platine-musique",
        link: "https://dev-platine-musique.pantheonsite.io"
    },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value.toLowerCase();
        setSearchTerm(newSearchTerm);
    };

    const filteredProjects = siteProject.filter(site => {
        const siteName = site.name.toLowerCase();
        return siteName.includes(searchTerm);
    });

    return (
        <>
            <section className=" container p-5 shadow border-0 rounded-4 justify-content-md-center" data-aos="zoom-in">
                <input className="p-3  m-5 shadow border-0 rounded-4 text-center" type="text" id="nomSiteFilter" placeholder="Filtrer par nom" value={searchTerm}
                    onChange={handleInputChange} />
                <div id="carouselExampleCaptions" className="carousel slide" style={{ backgroundColor: 'black' }}>
                    <div className="carousel-indicators ">
                        {siteProject.map((site, index) => (
                            <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}
                                aria-label={`Slide ${site.id + 1}`} aria-current={site.id === 0 ? 'true' : 'false'}></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {filteredProjects.map((site, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={site.picture} className="d-block w-100 .bg-primary" alt={site.alt} />
                                <div
                                    className="carousel-caption d-none d-md-block fw-bold text-white bg-secondary bg-opacity-75 rounded-4">
                                    <h2 className="fw-bold">{site.name}</h2>
                                    <p className="fs-2">{site.technology}</p>
                                    <p className="fs-2">{site.description}</p>
                                    <a href={site.link} target="_blank" className="btn btn-primary fs-1 btn-lg m-5" role="button">Visitez le
                                        site</a>
                                </div>
                            </div>
                        ))}

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden ">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}


export default Project;
