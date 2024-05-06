import React, { MutableRefObject } from 'react'
import AboutMe from "../../components/desktop/AboutMe";
import Footer from "../../components/desktop/Footer";
import Heading from "../../components/desktop/Heading";
import MySkills from "../../components/desktop/MySkills";
import Projects from "../../components/desktop/Projects";
import Session from "../../components/desktop/Session";
import WorkExperience from "../../components/desktop/WorkExperience";

export default function Desktop() {
  return (
    <div className='w-full flex flex-col items-center max-md:hidden'>
        <Heading/>
        <Session/>
        <AboutMe/>
        <MySkills/>
        <WorkExperience/>
        <Projects/>
        <Footer/>
    </div>
  )
}
