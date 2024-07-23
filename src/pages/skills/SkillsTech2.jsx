import React from "react";
import html5 from "../../../public/assets/media/img/logo/html5-plain.svg";
import css from "../../../public/assets/media/img/logo/css3-plain.svg";
import js from "../../../public/assets/media/img/logo/javascript-original.svg";
import php from "../../../public/assets/media/img/logo/php-original.svg";
import react from "../../../public/assets/media/img/logo/react-original.svg";
import bootstrap from "../../../public/assets/media/img/logo/bootstrap-original.svg";
import symfony from "../../../public/assets/media/img/logo/symfony-original.svg";
import vsc from "../../../public/assets/media/img/logo/vscode-original.svg";
import phpstorm from "../../../public/assets/media/img/logo/phpstorm-original.svg";
import datagrip from "../../../public/assets/media/img/logo/datagrip-original.svg";
import mysql from "../../../public/assets/media/img/logo/mysql-original.svg";
import git from "../../../public/assets/media/img/logo/git-original.svg";
import github from "../../../public/assets/media/img/logo/github-original.svg";
import wordpress from "../../../public/assets/media/img/logo/wordpress-plain.svg";
import figma from "../../../public/assets/media/img/logo/figma-original.svg";
import trello from "../../../public/assets/media/img/logo/trello-original.svg";
import node from "../../../public/assets/media/img/logo/nodejs-original.svg";
import Mongodb from "../../../public/assets/media/img/logo/mongodb-original.svg";
import express from "../../../public/assets/media/img/logo/express.svg";

function SkillsTech2() {

    const skillsTech1 = [
        {
            picture: node,
            type: "success",
            name: "Nodejs",
        },
        {
            picture: react,
            type: "info",
            name: "React",
        },
        {
            picture: express,
            type: "dark",
            name: "Express",
        },
        {
            picture: Mongodb,
            type: "success",
            name: "MongoDB",
        },
        {
            picture: symfony,
            type: "dark",
            name: "Symfony",
        },
        {
            picture: mysql,
            type: "primary",
            name: "Mysql",
        },
        {
            picture: bootstrap,
            type: "indigo",
            name: "Bootstrap",
        },
        {
            picture: wordpress,
            width: "80",
            type: "secondary",
            name: "wordpress",
        },
    ];

    const skillsTech2 = [
        {
            picture: html5,
            type: "danger",
            name: "html",
        },
        {
            picture: css,
            type: "primary",
            name: "css",
        },     
        {
            picture: js,
            type: "warning",
            name: "Js",
        },
        {
            picture: php,
            type: "dark",
            name: "Php",
        },
        {
            picture: vsc,
            type: "primary",
            name: "Vscode",
        },
        {
            picture: git,
            type: "danger",
            name: "Git",
        },
        {
            picture: github,
            type: "black",
            name: "Github",
        },
        {
            picture: figma,
            type: "danger",
            name: "Figma",
        },
        {
            picture: trello,
            type: "primary",
            name: "Trello",
        },
    ];

    return (
        <>
        <section className="container-fluid" data-aos="zoom-in">
            <div className="container mt-5 p-5 shadow border-0 rounded-4">
                <div className="competences__data">
                    <h2 className="mb-5 display-2 text-start fw-bold" style={{color: 'var(--title-color)'}}>
                        Frameworks
                    </h2>
                </div>
                <div className="row justify-content-center gap-5 " >
                    {skillsTech1.map((skill, index) => (
                        <div className="mt2 mb-5 col-lg-12 " id='skillsTech1' style={{ width: '12rem' }} key={index}>
                            <h4 className={`m-3  text-${skill.type} text-center`} style={{ fontWeight: 'bold'}}>{skill.name}</h4>
                            <img src={skill.picture} className="object-fit-cover" alt="logo_des_technologies"/>
                        </div>
                    ))}
                </div>
                <div className="competences__data">
                    <h2 className="mb-5 pt-5 display-2 text-start fw-bold" style={{color: 'var(--first-color)'}}>
                        Technologies
                    </h2>
                </div>
                <div className="row justify-content-center gap-5 mb-5">
                    {skillsTech2.map((skill, index) => (
                            <div className="mt2 col-lg-12" id='skillsTech1' style={{ width: '11rem' }} key={index}>
                            <h4 className={`m-3  text-${skill.type} text-center`} style={{ fontWeight: 'bold' }}>{skill.name}</h4>
                            <img src={skill.picture} className="object-fit-cover" alt="logo_des_technologies"/>
                        </div>
                    ))}
                </div>
                </div>
        </section >
        </>
    )
}


export default SkillsTech2; 
