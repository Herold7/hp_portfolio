import React from "react";

function Experiences() {

    const resumExp = [
        {
            date: "2024",
            position: "Concepteur Développeur stagiaire",
            company: "Airport Training Academy",
            location: "Rungis",
            description: "Refonte du site internet. L'objectif était de présenter les services de l'organisation et de permettre aux visiteurs de s'inscrirent aux formations."
        },
        {
            date: "2023",
            position: "Développeur stagiaire",
            company: "A-team Development",
            location: "Colombes",
            description: "Le client était une agence de voyages de luxe pour le Mozambique. L'objectif était de gagner en visibilité afin d\'accroître leur base de prospects et de futurs membres. Ce stage m\'a permis de confronter mes connaissances, acquises lors de la formation DWWM, à un projet concret."
        },
        {
            date: "2018 - 2021",
            position: "Développeur bénévole",
            company: "Association Makeda",
            location: "Paris",
            description: "Mes premiers pas dans le monde du développement, en dehors de toutes connaissances techniques préalables. J'ai créé à partir d\'un CMS 4 sites afin que les services de l\'association soient identifiables, dans le cadre de la promotion de groupes musicaux."
        },
    ];

    return (
        <>
            <div className="container mt-5" data-aos="zoom-in">
                <div className="row gx-5 justify-content-center">
                    {resumExp.map((skill, index) => (
                        <div className="card container shadow border-0 rounded-4 mb-5" key={index}>
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg">
                                        <div className="bg-light p-4 rounded-4">
                                            <div className="text-primary fw-bolder mb-2">{skill.date}</div>
                                            <div className="small fw-bolder">{skill.position}</div>
                                            <div className="small text-muted">{skill.company}</div>
                                            <div className="small text-muted">{skill.location}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div>{skill.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Experiences; 