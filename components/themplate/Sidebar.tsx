"use client"
import React, { useState } from 'react';
import {
    MdOutlineDashboard,
    MdAccountCircle,
    MdAnalytics,
    MdOutlineSettings,
    MdLogout,
  } from 'react-icons/md';
  import { FaCircleUser } from "react-icons/fa6";
  import {
    BsChevronDown,
    BsChatLeftText,
    BsCalendarCheck,
    BsFiles,
    BsServer,
  } from 'react-icons/bs';
import SideBarMenuItem from '../module/SideBarMenuItem';
const Sidebar = () => {
    const Menus = [
      
      
        {
          title: 'Dashboard',
          src: 'Services',
          icon:<MdOutlineDashboard />,
          mainPath:'/dashboard',
          subMenus: [
            {
              title: 'Service 1',
              src: '/dashboard',
            },
           
          ],
        },
        {
          title: 'Services',
          src: 'Services',
          icon: <BsServer />,
          subMenus: [
            {
              title: 'Service 1',
              src: '/services/services1',
      
        
            },
            {
              title: 'Service 2',
              src: '/services/services2',
      
        
            },
            {
              title: 'Service 3',
              src: '/services/services3',
            },
          ],
        },
        { title: 'Analytics', src: 'Chart', icon: <MdAnalytics /> },
        { title: 'Files ', src: 'Folder', icon: <BsFiles /> },
        { title: 'Setting', src: 'Setting', icon: <MdOutlineSettings /> },
        { title: 'Logout', src: 'Logout', icon: <MdLogout /> },
      ];
    return (
        <div  className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 no-scroll lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 py-4 transition-all duration-200 ease-in-out -translate-x-64`}>
           <div className='flex justify-start items-center gap-4 py-8 px-4'>
          <FaCircleUser size={30} className='text-blue-400'/>
          <span className='text-gray-400'>Nariman Tatari</span>
           </div>
           <div>
            <h4 className='text-gray-400 mb-4 font-medium px-4'>pages</h4>
           {
                Menus.map((item,index)=>(
                  <SideBarMenuItem  key={index} menuItem={item}/>   
                ))
            }
           </div>
          
        
        </div>
    );
};

export default Sidebar;