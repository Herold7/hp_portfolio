import React from "react";

function SkillThird() {
    const skillHobThird = [
        {
            title: "Gestion administrative",
            description: "Mes dernières expériences professionnelles et personnelles m'ont demandées d'organiser et d'administrer tant des évènements publics que les projections professionnelles de chercheurs d'emploi.",
            target: "collapseOne",
        },
        {
            title: "Animation",
            description: "Par goût personnel et grâce à plusieurs expériences professionnelles et associatives, j'aime animer les rencontres collectives.",
            target: "collapseTwo",
        },
        {
            title: "Le chant",
            description: "J'aime le chant sous toutes ses formes. J'ai eu l'occasion de monter et surtout de faire monter sur plusieurs scènes de spectacle des chanteurs et des musiciens.",
            target: "collapseThree",
        },

    ];


    return (
        <>
            <div className="accordion">
                <div className="accordion container mt-5 p-5 shadow border-0 rounded-4 " id="accordionFirst" data-aos="fade-up">
                    <div className="text-center mb-5">

                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline display-3"
                            style={{ color: 'var(--text-color)', textTransform: 'capitalize' }}>compétences tierces</span></h1>

                    </div>
                    <div className="accordion">
                        {skillHobThird.map((third, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header">
                                    <button className="fs-2 accordion-button" style={{ backgroundColor: 'var(--title-color-alt)' }} type="button"
                                        data-bs-toggle="collapse" data-bs-target={`#${third.target}`} aria-expanded="true"
                                        aria-controls={third.target}>
                                        {third.title}
                                    </button>
                                </h2>
                                <div id={third.target} className="accordion-collapse collapse " data-bs-parent="#accordionFirst">
                                    <div className="accordion-body">{third.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SkillThird; 