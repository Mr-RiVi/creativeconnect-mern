import React from "react";
import { Link } from "react-router-dom";


import GroupsIcon from "@mui/icons-material/Groups";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import EMobiledataIcon from "@mui/icons-material/EMobiledata";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SupportIcon from "@mui/icons-material/Support";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

export const SidebarData = [
  {
    title: "All Users",
    icon: <GroupsIcon />,
    Link: "/user/AllUsers",
  },
  {
    title: "Report",
    icon: <AssessmentIcon />,
    Link: "/user/insert-user",
  },
  {
    title: "Meetings",
    icon: <MarkUnreadChatAltIcon />,
    Link: "/user/insert-user",
  },
  {
    title: "Home",
    icon: <HomeIcon />,
    Link: "/home",
  },
  {
    title: "Entrapranure",
    icon: <EMobiledataIcon />,
    Link: "/home",
  },
  {
    title: "Inventor",
    icon: <EmojiObjectsIcon />,
    Link: "/home",
  },
  {
    title: "Mentor",
    icon: <SupportIcon />,
    Link: "/home",
  },
];
