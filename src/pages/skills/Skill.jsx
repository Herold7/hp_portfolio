import React from "react";
import Nav from "../../components/Nav";
import Experiences from "./Experiences";
import SkillsTech from "./SkillsTech";
import SkillThird from "./SkillThird";
import SkillHobbies from "./SkillHobbies";
import Footer from "../../components/Footer"


function Skill() {

    return (
        <>
            <Nav />
            <main className="contain">

                <h1>
                    compétences
                </h1>

                <section className="competences container-fluid" data-aos="zoom-in">
                    <div className="container mt-5 p-5 shadow border-0 rounded-4">
                        <div className="competences__data">
                            <h2>
                                langages
                            </h2>
                        </div>

                        <SkillsTech />
                    </div>
                </section>

                <h1>
                    expériences
                </h1>

                <div className="container mt-5" data-aos="zoom-in">
                    <div className="row gx-5 justify-content-center">                       
                            <Experiences />                      
                    </div>
                </div>

                <SkillThird />

                <SkillHobbies />


            </main>
            <Footer />
        </>
    )
}

export default Skill;