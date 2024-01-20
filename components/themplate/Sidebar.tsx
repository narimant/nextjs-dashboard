"use client"
import React, { useState } from 'react';
import {
    MdOutlineDashboard,

  } from 'react-icons/md';
  import { FaCircleUser } from "react-icons/fa6";
 
  import { FaShop } from "react-icons/fa6";
  import { IoClose } from "react-icons/io5";
  import { IoMdExit } from "react-icons/io";
  import { FaUsers } from "react-icons/fa";
import SideBarMenuItem from '../module/SideBarMenuItem';

type HeaderProps={
  sidebarOpen:boolean;
  setSidebarOpen: (val: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }:HeaderProps) => {
    const Menus = [

        {
          title: 'داشبورد',
          icon:<MdOutlineDashboard />,
          mainPath:'/dashboard',
          subMenus: [
            {
              title: 'داشبورد',
              src: '/dashboard',
            },
           
          ],
        },
        {
          title: 'فروشگاه',
          mainPath: '/dashboard/shop',
          icon: <FaShop />,
          subMenus: [
            {
              title: ' مشتریان',
              src: '/dashboard/shop/customers',
            },
            {
              title: 'سفارشات',
              src: '/dashboard/shop/orders',
            },   
          ],

        },
        ,
        {
          title: 'انجمن',
          mainPath: '/Community',
          icon: <FaUsers />,
          subMenus: [
            {
              title: 'کاربران',
              src: '/dashboard/community/users',
            },
             
          ],
          
        },
       
       
      ];
    return (
      <>
      {/* Sidebar backdrop (mobile only) */}
  <div
      onClick={()=>setSidebarOpen(false)}
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
       
      ></div>

        <div 
          className={`flex flex-col absolute z-40 right-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-64'
          }`}
        >
         <div className='flex justify-end text-gray-400 lg:hidden'>
          <button onClick={()=>setSidebarOpen(false)}><IoClose className='text-xl'/></button>
         </div>
           <div className='flex justify-start items-center gap-4 py-8 px-4'>

          <FaCircleUser size={30} className='text-blue-400'/>
          <span className='text-gray-400'>نریمان تاتاری </span>
           </div>
           <div>
            <h4 className='text-gray-400 mb-4 font-medium px-4'>صفحات</h4>
           {
                Menus.map((item,index)=>(
                  <SideBarMenuItem  key={index} menuItem={item}/>   
                ))
            }
            <button className='p-4 font-medium items-center flex justify-start gap-4 text-red-400 hover:bg-red-400 hover:text-white w-full rounded-lg'>
              <IoMdExit size={25}/>
              <span>خروج</span>
            </button>
           </div>
          
        
        </div>
        </>
    );
};

export default Sidebar;