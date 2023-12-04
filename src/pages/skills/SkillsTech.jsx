import React from "react";

function SkillsTech() {

    const skillsTech1 = [
        {
            picture: '../../../public/assets/media/img/logo/HTML5.png',
            value: "80",
            type: "danger",
            name:"Html",
        },
        {
            picture: '../../../public/assets/media/img/logo/css3.png',
            value: "70",
            type: "primary",
            name:"Css",
        },
        {
            picture: '../../../public/assets/media/img/logo/js.png',
            value: "60",
            type: "warning",
            name:"Js",
        },
        {
            picture: '../../../public/assets/media/img/logo/php.png',
            value: "50",
            type: "info",
            name:"Php",
        },
        {
            picture: '../../../public/assets/media/img/logo/React.png',
            value: "60",
            type: "success",
            name:"React",
        },
        {
            picture: '../../../public/assets/media/img/logo/Bootstrap.png',
            value: "60",
            type: "info",
            name:"Bootstrap",
        },
        {
            picture: '../../../public/assets/media/img/logo/Symfony.png',
            value: "50",
            type: "danger",
            name:"Symfony",
        },
    ];

    const skillsTech2 = [
        {
            picture: '../../../public/assets/media/img/logo/vscode.png',
            value: "70",
            type: "primary",
            name:"Vscode",
        },
        {
            picture: '../../../public/assets/media/img/logo/PhpStorm.png',
            value: "60",
            type: "success",
            name:"PhpStorm",
        },
        {
            picture: '../../../public/assets/media/img/logo/mysqlWorkbench.png',
            value: "70",
            type: "danger",
            name:"MysqlWorkbench",
        },
        {
            picture: '../../../public/assets/media/img/logo/git.png',
            value: "50",
            type: "info",
            name:"Git",
        },
        {
            picture: '../../../public/assets/media/img/logo/github.png',
            value: "60",
            type: "warning",
            name:"Github",
        },
        {
            picture: '../../../public/assets/media/img/logo/cms.png',
            value: "80",
            type: "success",
            name:"Cms",
        },
        {
            picture: '../../../public/assets/media/img/logo/Figma.png',
            value: "60",
            type: "danger",
            name:"Figma",
        },
    ];

    return (
        <>
            <div className="row" style={{ marginTop: '7rem' }}>
                {skillsTech1.map((skill, index) => (
                    <div className="mt2 col-lg-12" key={index}>
                        <h3 className={`m-3  text-${skill.type}`} style={{fontWeight:'bold'}}>{skill.name}</h3>
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
                        <h3 className={`m-3  text-${skill.type}`} style={{fontWeight:'bold'}}>{skill.name}</h3>
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