import React from "react";
import html from "../../../public/assets/media/img/logo/HTML5.png";

function SkillsTech() {

    const skillsTech1 = [
        {
            picture: {html},
            value: "80",
            type: "danger",
        },
        {
            picture: '../../../public/assets/media/img/logo/css3.png',
            value: "70",
            type: "basic",
        },
        {
            picture: '../../../public/assets/media/img/logo/js.png',
            value: "60",
            type: "warning",
        },
        {
            picture: '../../../public/assets/media/img/logo/php.png',
            value: "50",
            type: "info",
        },
        {
            picture: '../../../public/assets/media/img/logo/React.png',
            value: "60",
            type: "success",
        },
    ];

    const skillsTech2 = [
        {
            picture: '../../../public/assets/media/img/logo/vscode.png',
            value: "70",
            type: "basic",
        },
        {
            picture: '../../../public/assets/media/img/logo/PhpStorm.png',
            value: "60",
            type: "success",
        },
        {
            picture: '../../../public/assets/media/img/logo/mysqlWorkbench.png',
            value: "70",
            type: "danger",
        },
        {
            picture: '../../../public/assets/media/img/logo/git.png',
            value: "50",
            type: "info",
        },
        {
            picture: '../../../public/assets/media/img/logo/github.png',
            value: "60",
            type: "warning",
        },
    ];

    return (
        <>
            <div className="row" style={{ marginTop: '7rem' }}>
                {skillsTech1.map((skill, index) => (
                    <div className="mt2 col-lg-12" key={index}>
                        <div className="progress  mb-4" role="progressbar" style={{ height: '20px' }}
                            aria-label={`striped example 20px high${skill.type}`} aria-valuenow={skill.value} aria-valuemin="0"
                            aria-valuemax="100">
                            <img className="language_skills" src={skill.picture} alt="logo_des_langages" />
                            <div className={`progress-bar progress-bar-striped bg-${skill.type}`}
                                style={{ width: `${skill.value}%`, fontSize: '1.5rem' }}>
                                {skill.value}%</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="competences__data-technologie">
                <h2>
                    technologies
                </h2>
            </div>
            <div className="row" style={{ marginTop: ' 10rem' }}>
                {skillsTech2.map((skill, index) => (
                    <div className="mt2 col-lg-12 " key={index}>
                        <div className="progress  mb-4" role="progressbar" style={{ height: ' 20px' }}
                            aria-label={`striped example 20px high${skill.type}`} aria-valuenow={skill.value} aria-valuemin="0"
                            aria-valuemax="100">
                            <img className="technologie_skills" src={skill.picture} alt="logo_des_technologies" />
                            <div className={`progress-bar progress-bar-striped bg-${skill.type}`} style={{ width: `${skill.value}%`, fontSize: '1.5rem' }}>{skill.value}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export default SkillsTech; 