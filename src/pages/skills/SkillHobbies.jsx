import React from "react";

function SkillHobbies() {
    const skillHobThird = [
        {
            Title: "Président d'association",
            description: "Je suis président de plusieurs associations de promotion du spectacle vivant, d'éducation populaire et humanitaire.",
            target: "collapseFour",
        },
        {
            Title: "Sports",
            description: "J'apprécie le sport tant par sa pratique qu'en tant que spectateur. Que ce soit en extérieur, ou en salle ; seul ou accompagné l'activité sportive et physique est essentiel.",
            target: "collapseFive",
        },
        {
            Title: "Mangas",
            description: "J'appartiens à une génération qui a découvert les mangas au travers de la télévision, pour enfin me diriger vers les screen et les formats papiers. Ces productions sont un plus pour l'inspiration",
            target: "collapseSix",
        },
    ];


    return (
        <>
            <div className="accordion">
                <div className="accordion container mt-5 p-5 shadow border-0 rounded-4" id="accordionSecond" style={{ marginBottom: "5rem" }} >
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline display-3"
                            style={{ color: 'var(--text-color)', textTransform: 'capitalize' }}>hobbies</span></h1>
                    </div>
                    <div className="accordion">
                        {skillHobThird.map((third, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header">
                                    <button className="fs-2 accordion-button" style={{ backgroundColor: 'var(--title-color-alt)' }} type="button"
                                        data-bs-toggle="collapse" data-bs-target={`#${third.target}`} aria-expanded="true"
                                        aria-controls={third.target}>
                                        {third.Title}
                                    </button>
                                </h2>
                                <div id={third.target} className="accordion-collapse collapse " data-bs-parent="#accordionSecond">
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
export default SkillHobbies; 