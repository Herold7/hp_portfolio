import React from "react";
import { useState } from "react";

function Experiences() {

    const resumExp = [
        {
            date: "2019 - Present",
            position: "Senior graphic design specialist",
            company: "",
            location: "Experion, New York, NY",
            description: "Le client était une agence de voyage de luxe pour le Mozambique. L'objectif étaient de gagner en visibilité afin d\'accroître leur base de prospect et de futur membres. Ce stage m\'a permis de confronter mes connaissances, acquisent lors de la formation DWWM, à un projet concret.",
        },
        {
            date: "2018 - 2021",
            position: "Développeur bénévole",
            company: "Association Makeda",
            location: "Paris",
            description: "Mes premiers pas dans le monde du développement, en dehors ded toutes connaissances préalables. J'ai créé à partir d\'un CMS 4 sites afin que les services de l\'association soient identifiables, dans le cadre de la promotion de groupes de musique."
        },
    ];

    return (
        <>
            {resumExp.map((skill, index) => (
                <div className="card shadow border-0 rounded-4 mb-5" key={index}>
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
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
        </>
    )
}

export default Experiences; 