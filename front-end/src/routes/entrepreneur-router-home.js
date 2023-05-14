import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'

import SideNavbar from '../components/sidenavbar-enterpreneur.component'
//import App from '../components/sidebar.component'
import EntrepreneurAdminHome from '../pages/Entrepreneur/entrepreneur-admin-home'
import EntrepreneurPostIdea from '../pages/Entrepreneur/entrepreneur-post-idea'
import EntrepreneurIdeaDetail from '../pages/Entrepreneur/entrepreneur-idea-view'
import EntrepreneurProfileDetail from '../pages/Entrepreneur/entrepreneur-profile'
import EntrepreneurProfileUpdate from '../pages/Entrepreneur/entrepreneur-profile-update'
import EntrepreneurIdeaUpdate from '../pages/Entrepreneur/entrepreneur-idea-update'
import EntrepreneurIdeaAdd from '../pages/Entrepreneur/entrepreneur-idea-add'

import EntrepreneurIdeaDelete from '../pages/Entrepreneur/entrepreneur-idea-delete'
import Seek from '../pages/Entrepreneur/seek'


const EntrepreneurRouterHome = () => {
  return (
    <div className=" bg-blue-200 ">
      <Header />

      <div className=" flex min-w-full w-full bg-red-200 ">
        <SideNavbar />        
        <div className ='ml-[80px]'>
            <Routes>

              <Route path="/" element={<EntrepreneurAdminHome />}></Route> 
              <Route path="/idea" element={<EntrepreneurPostIdea />}></Route>   
              <Route path="/ideadetail/:id" element={<EntrepreneurIdeaDetail />}></Route>
              <Route path="/entrepreneurdetail/:id" element={<EntrepreneurProfileUpdate />}></Route>
              <Route path="/profiledetail/:id" element={<EntrepreneurProfileDetail />}></Route>
              
              <Route path="/ideaupdate/:entId/:prodId" element={<EntrepreneurIdeaUpdate />}></Route>
              <Route path="/ideaadd/:entId" element={<EntrepreneurIdeaAdd />}></Route>

              <Route path="/ideadelete/:id" element={<EntrepreneurIdeaDelete />}></Route>
              <Route path="/seek/:id" element={<Seek />}></Route>

            </Routes>        
        </div>
      </div>
    </div>
  )
}

export default EntrepreneurRouterHome