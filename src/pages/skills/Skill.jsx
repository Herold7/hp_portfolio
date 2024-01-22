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
                
                        <SkillsTech />
                    

                <h1>
                    expériences
                </h1>

                            <Experiences />                      
                    
                <SkillThird />

                <SkillHobbies />

            </main>
            <Footer />
        </>
    )
}

export default Skill;