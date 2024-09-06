"use client"
import React, { useRef } from 'react'
import Header from '../modules/Header/Header'
import Recommend from '../modules/Recommend/Recommend'
import Details from '../modules/Details/Details'
import Projects from '../modules/Projects/Projects'
import TeamMember from '../modules/TeamMember/TeamMember'
import Services from '../modules/Services/Services'

function HomePage() {
  const recommendRef = useRef(null);
  const detailsRef = useRef(null);
  const projectsRef = useRef(null);
  const teamMemberRef = useRef(null);
  const servicesRef = useRef(null);

  const handleScroll = (section) => {
    switch (section) {
      case 'recommend':
        recommendRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'details':
        detailsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        teamMemberRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  return (
    <>
        <Header onLinkClick={handleScroll} />   
        <div ref={recommendRef}><Recommend /></div>
        <div ref={detailsRef}><Details /></div>
        <div ref={projectsRef}><Projects /></div>
        {/* <div ref={teamMemberRef}><TeamMember /></div> */}
        <div ref={servicesRef}><Services /></div>
    </>
  )
}

export default HomePage
