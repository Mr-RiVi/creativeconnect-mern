import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'

import SideNavbar from '../components/sidenavbar-enterpreneur.component'
import EntrepreneurAdminHome from '../pages/Entrepreneur/entrepreneur-admin-home'
import EntrepreneurPostIdea from '../pages/Entrepreneur/entrepreneur-post-idea'
import EntrepreneurViewAllIdea from '../pages/Entrepreneur/entrepreneur-viewall-idea'


const EntrepreneurRouterHome = () => {
  return (
    <div>
      <Header />
      <div className=" flex min-w-full w-full bg-red-200 ">
        <SideNavbar />
        
        <Routes>

          <Route path="/" element={<EntrepreneurAdminHome />}></Route> 
          <Route path="/idea" element={<EntrepreneurPostIdea />}></Route>   
          <Route path="/viewallidea" element={<EntrepreneurViewAllIdea />}></Route>     
        
        </Routes>
      </div>
    </div>
  )
}

export default EntrepreneurRouterHome


