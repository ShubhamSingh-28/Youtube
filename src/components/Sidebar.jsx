//import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
export default function Sidebar() {
  const mainLinks=[
    {
      icon:<AiFillHome className=" text-xl"/>,
      title:"Home",
    },
    {
      icon:<MdOutlineSlowMotionVideo className=" text-xl"/>,
      title:"Shorts",
    },
    {
      icon:<MdSubscriptions className=" text-xl"/>,
      title:"Subscription",
    }
];
const otherLinks=[
  {
    icon: <MdOutlineVideoLibrary className="text-xl" />,
    name: 'Library',
  },
  {
    icon: <MdHistory className="text-xl" />,
    name: 'history',
  },
  {
    icon: <MdOutlineWatchLater className="text-xl" />,
    name: 'Watch Later',
  },
  {
    icon: <LuThumbsUp className="text-xl"/>,
    name:"Liked Video"
  }
]

  return (
    <div className="bg-[#181717] text-white  w-2/12  cursor-pointer">
  <nav className="flex flex-col items-start space-y-2 p-4 ">
    <ul className="flex flex-col space-y-2 w-full  ">
      {mainLinks.map(({ icon, title }) => (
        <li key={title} className=" hover:bg-slate-600 rounded-full lg:py-3 lg:px-5">
          <a href="#" className="flex items-center space-x-2">
            {icon}
            <span className="hidden sm:inline">{title}</span>
          </a>
        </li>
      ))}
    </ul>
    <ul className="flex flex-col space-y-2 w-full ">
      {otherLinks.map(({ icon, name }) => (
        <li key={name} className=" hover:bg-slate-600 rounded-full lg:py-3 lg:px-5">
          <a href="#" className="flex items-center space-x-2">
            {icon}
            <span className="hidden sm:inline">{name}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>


  )
}
