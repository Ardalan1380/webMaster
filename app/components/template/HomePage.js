import React from 'react'
import Header from '../modules/Header/Header'
import Recommend from '../modules/Recommend/Recommend'
import Details from '../modules/Details/Details'
import Projects from '../modules/Projects/Projects'
import TeamMember from '../modules/TeamMember/TeamMember'
import Services from '../modules/Services/Services'

function HomePage() {
  return (
    <>
        <Header />   
        <Recommend />
        <Details />
        <Projects />
        <TeamMember />
        <Services />
    </>
  )
}

export default HomePage