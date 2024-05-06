import React from 'react'
import HeadingMobile from './HeadingMobile'
import Session from './SessionMobile'
import AboutMe from './AboutMeMobile'
import MySkills from './MySkillsMobile'
import WorkExperience from './WorkExperienceMobile'
import Footer from './FooterMobile'
import Projects from './ProjectsMobile'

export default function Mobile() {
  return (
    <div className='w-full flex flex-col items-center md:hidden'>
        <HeadingMobile/>
        <Session/>
        <AboutMe/>
        <MySkills/>
        <WorkExperience/>
        <Projects/>
        <Footer/>
    </div>
  )
}
