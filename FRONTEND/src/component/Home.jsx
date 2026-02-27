import React from 'react'
import Body from './Body'
import NTPCBanner from './NTPCBanner'
import Message from './Message'
import About from './About'
import QuickLinksNotice from './Notice'
import CoursesCategories from './CourseCategories'

const Home = () => {
  return (
    <>
     <Body />
      <NTPCBanner />
      
      <Message />
      <About />
      <QuickLinksNotice />
      <CoursesCategories />
    
    </>
  )
}

export default Home