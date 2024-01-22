import React from "react";
import html5 from "../../../public/assets/media/img/logo/HTML5.png";
import css from "../../../public/assets/media/img/logo/css3.png";
import js from "../../../public/assets/media/img/logo/js.png";
import php from "../../../public/assets/media/img/logo/php.png";
import react from "../../../public/assets/media/img/logo/React.png";
import bootstrap from "../../../public/assets/media/img/logo/bootstrap.png";
import symfony from "../../../public/assets/media/img/logo/symfony.png";
import vsc from "../../../public/assets/media/img/logo/vscode.png";
import phpstorm from "../../../public/assets/media/img/logo/PhpStorm.png";
import workbench from "../../../public/assets/media/img/logo/mysqlWorkbench.png";
import git from "../../../public/assets/media/img/logo/git.png";
import github from "../../../public/assets/media/img/logo/github.png";
import cms from "../../../public/assets/media/img/logo/cms.png";
import figma from "../../../public/assets/media/img/logo/Figma.png";

function SkillsTech() {

    const skillsTech1 = [
        {
            picture: html5,
            value: "80",
            type: "danger",
            name: "Html",
        },
        {
            picture: css,
            value: "70",
            type: "primary",
            name: "Css",
        },
        {
            picture: js,
            value: "60",
            type: "warning",
            name: "Js",
        },
        {
            picture: php,
            value: "50",
            type: "info",
            name: "Php",
        },
        {
            picture: react,
            value: "60",
            type: "success",
            name: "React",
        },
        {
            picture: bootstrap,
            value: "60",
            type: "info",
            name: "Bootstrap",
        },
        {
            picture: symfony,
            value: "50",
            type: "danger",
            name: "Symfony",
        },
    ];

    const skillsTech2 = [
        {
            picture: vsc,
            value: "70",
            type: "primary",
            name: "Vscode",
        },
        {
            picture: phpstorm,
            value: "60",
            type: "success",
            name: "PhpStorm",
        },
        {
            picture: workbench,
            value: "70",
            type: "danger",
            name: "MysqlWorkbench",
        },
        {
            picture: git,
            value: "50",
            type: "info",
            name: "Git",
        },
        {
            picture: github,
            value: "60",
            type: "warning",
            name: "Github",
        },
        {
            picture: cms,
            value: "80",
            type: "success",
            name: "Cms",
        },
        {
            picture: figma,
            value: "60",
            type: "danger",
            name: "Figma",
        },
    ];

    return (
        <>
        <section className="competences container-fluid" data-aos="zoom-in">
            <div className="container mt-5 p-5 shadow border-0 rounded-4">
                <div className="competences__data">
                    <h2 className="contain mb-5 display-2 text-start fw-bold" style={{color: 'var(--title-color)'}}>
                        Langages
                    </h2>
                </div>
                <div className="row" style={{ marginTop: '7rem' }}>
                    {skillsTech1.map((skill, index) => (
                        <div className="mt2 col-lg-12" key={index}>
                            <h3 className={`m-3  text-${skill.type}`} style={{ fontWeight: 'bold' }}>{skill.name}</h3>
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
                <div className="competences__data">
                    <h2 className="contain mt-5 pt-5 display-2 text-start fw-bold" style={{color: 'var(--first-color)'}}>
                        Technologies
                    </h2>
                </div>
                <div className="row" style={{ marginTop: ' 10rem' }}>
                    {skillsTech2.map((skill, index) => (
                        <div className="mt2 col-lg-12 " key={index}>
                            <h3 className={`m-3  text-${skill.type}`} style={{ fontWeight: 'bold' }}>{skill.name}</h3>
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
                </div>
        </section >
        </>
    )
}


export default SkillsTech; 