import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'
import SideNavbar from '../components/sidenavbar-mentor.component'
import MentorAdminHome from '../pages/Mentor/mentor-admin-home'
import MentorDetailsAdd from '../pages/Mentor/mentor-details-add'
import ProfileDetail from '../pages/Mentor/mentor-profile-view'
import ProfileDetailUpdate from '../pages/Mentor/mentor-profile-update'
import ProfileDetailCreate from '../pages/Mentor/mentor-profile-create'
import ProfileDetailDelete from '../pages/Mentor/mentor-profile-delete'
import MentorProfileQuestion from '../pages/Mentor/mentor-profile-question';
import MentorQuestion from '../pages/Mentor/mentor-question'

const MentorRouterHome = () => {
  return (
    <div className="bg-blue-200 ">
      <Header />
      <div className="flex min-w-full w-full bg-red-200">
        <SideNavbar  />
        <div className='ml-[80px]'>
          <Routes >
            <Route path="/" element={<MentorAdminHome />}></Route>
            <Route path="/addMentorDetails" element={<MentorDetailsAdd />}></Route>
            <Route path="/profiledetail/:id" element={<ProfileDetail />}></Route>
            <Route path="/profiledetailupdate/:id" element={<ProfileDetailUpdate />}></Route>
            <Route path="/profiledetailcreate/:id" element={<ProfileDetailCreate />}></Route>
            <Route path="/profiledetaildelete/:id" element={<ProfileDetailDelete />}></Route>
            <Route path="/profilequestion/:id" element={<MentorProfileQuestion />}></Route>
            <Route path="/question/:id" element={<MentorQuestion />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MentorRouterHome
