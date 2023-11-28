import React from "react";
import { useState } from 'react';


function Project() {
    const siteProject = [{
        id: 1,
        name: "Makeda-for-event",
        technology: "CMS",
        description: "Site internet d'évènementiel musicale",
        picture: "../../../public/assets/media/img/bg/portfolioevent.png",
        alt: "site de makeda for event",
        link: "https://www.makeda-for-event.com"
    },
    {
        id: 2,
        name: "Existentia",
        technology: "HTML, Js, JQuery, PHP, Bootstrap",
        description: "Site internet de conciergerie de luxe pour le Mozambique",
        picture: "../../../public/assets/media/img/bg/portfolioexistentia.png",
        alt: "site de existentia services",
        link: "https://www.existentiaservices.com"
    },
    {
        id: 3,
        name: "Makeda-for-mariage",
        technology: "CMS",
        description: "Site de prestation musicale pour mariage",
        picture: "../../../public/assets/media/img/bg/portfoliomariage.png",
        alt: "site de makeda for event",
        link: "https://www.makeda-for-mariage.com"
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
            <section className=" p-5 m-5 bd-example m-5 shadow border-0 rounded-4 justify-content-md-center" data-aos="zoom-in">
                <input className="p-3  m-5 shadow border-0 rounded-4 text-center" type="text" id="nomSiteFilter" placeholder="Filtrer par nom" value={searchTerm}
                    onChange={handleInputChange} />
                <div id="carouselExampleCaptions" className="carousel slide" style={{ backgroundColor:'black' }}>
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
                                    <a href={site.link} className="btn btn-primary fs-1 btn-lg m-5" role="button">Voir le
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