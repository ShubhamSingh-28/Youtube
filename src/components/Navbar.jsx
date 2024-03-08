//import React from 'react'
import { GrYoutube } from "react-icons/gr"
//import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import {  useLocation, useNavigate} from "react-router-dom";
import {  useState } from "react";

export default function Navbar() {
   const [searchQuery, setSearchQuery]=   useState("");
   const navigate = useNavigate();
   const searchQueryHandler=(event)=>{
    if((event?.key === "Enter" || event ==="searchButton") && searchQuery?.length > 0){
      navigate(`/searchResult/${searchQuery}`);
   }};
   const searchQueryHandler2=()=>{
    if(searchQuery?.length > 0){
      navigate(`/searchResult/${searchQuery}`);
   }};
   const {pathname} = useLocation();
   const pageName = pathname.split("/").filter(Boolean)?.[0];
  return (
    <div className="bg-[#181717] flex justify-between items-center text-white w-full h-16 px-2 lg:px-16 sticky top-0 z-20">
      <div className=" flex justify-center items-center gap-3 lg:gap-5">
       
        <div className=" flex gap-2 items-center lg:gap-4 cursor-pointer">
        <GrYoutube className=" text-red-700 text-2xl lg:text-3xl"/>
        <span className=" text-white font-semibold text-2xl lg:text-2xl">YouTube</span>
        </div>
      </div>
      
    <div className="flex items-center bg-[#353434] rounded-full">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e)=>setSearchQuery(e.target.value)}
        value={searchQuery}
        onKeyUp={searchQueryHandler}
        className="flex-1 appearance-none py-2 px-2 rounded-3xl font-semibold bg-gray-200 text-black leading-tight focus:outline-none focus:shadow-outline"
      />
      <button className=" hover:text-gray-500 cursor-pointer"
      onClick={searchQueryHandler2}>

        <CiSearch className=" text-2xl font-bold"  />
      </button>
    </div>
        
    </div>
    
  )
}
