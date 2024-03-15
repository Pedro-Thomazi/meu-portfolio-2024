import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import PageTop from '../Components/PageTop/PageTop'
import MyProjects from '../Components/MyProjects/MyProjects'
import PrincipalProjects from '../Components/PrincipalProjects/PrincipalProjects'
import MoreProjects from '../Components/MoreProjects/MoreProjects'
import AboutMe from '../Components/AboutMe/AboutMe'
import Contacts from '../Components/Contacts/Contacts'

const Home = () => {
  return (
    <div>
      <Navbar />
      <PageTop />
      <MyProjects />
      <PrincipalProjects />
      <MoreProjects />
      <AboutMe />
      <Contacts />
    </div>
  )
}

export default Home
