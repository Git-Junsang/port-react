import React from "react";
import Header from "../components/Header.jsx";
import Intro from "../components/Intro.jsx";
import Skill from "../components/Skill.jsx";
import Site from "../components/Site.jsx";
import Port from "../components/Port.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Skip from "../components/Skip.jsx";
import Main from "../components/Main.jsx";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;