import React from "react";
import Nav from "../../components/Nav";
import Experiences from "./Experiences";
import SkillsTech from "./SkillsTech";
import SkillsTech2 from "./SkillsTech2";
import SkillHobbies from "./SkillHobbies";
import Footer from "../../components/Footer";
import SkillOther from "./SkillOther";

function Skill() {
    return (
    <>
        <Nav />
        <main className="contain">
        <h1>compétences</h1>
        <SkillsTech2 />
        <h1>expériences</h1>
        <Experiences />
        <SkillOther />
        <SkillHobbies />
        </main>
        <Footer />
    </>
    );
}

export default Skill;
