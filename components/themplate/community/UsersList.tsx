"use client"
import TopChannel from '@/components/module/Cards/TopChannel';
import PageTop from '@/components/module/PageTop';
import User from '@/components/module/community/User';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const UsersList = () => {
    const [users,setUsers]=useState([
    {img:'/images/users/user-36-01.jpg',name:'نریمان تاتاری',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-02.jpg',name:'رحمان  ایری',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-03.jpg',name:'محمد آدینه',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-04.jpg',name:'غفور پرکار',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-05.jpg',name:'رحمت کارگر',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-06.jpg',name:'مرجان توغدوری',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-07.jpg',name:'روحالله بابایانی',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-08.jpg',name:'مرضیه برومند',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    {img:'/images/users/user-36-09.jpg',name:'فاطمه لرستانی',job:'برنامه نویس',info:'من یک برنامه نویس هستم که  به صورت فول استک کار میکنم'},
    ])
    return (
        <div className='p-8'>
              <PageTop title='لیست کاربران'  buttonText='افزودن کاربر'/>
              <div className='grid grid-cols-12 gap-5 mt-8'>
                {
                    users.map((user,index)=>(
                        <User data={user} key={index}/>
                    ))
                }
          
              </div>

              <div className='py-8 flex justify-center items-center'>
              <span className='border border-slate-200 inline-block py-3 ml-2 px-2 text-gray-400'><IoIosArrowForward /></span>
                <ul className='flex justify-center items-center'>
                 
                    
                    <li><Link className='border border-slate-200 inline-block py-2 px-3 text-gray-800' href="#">2</Link></li>
                    <li><Link className='border border-slate-200 inline-block py-2 px-2 text-gray-800' href="#">3</Link></li>
                    <li><Link className='border border-slate-200 inline-block py-2 px-2 text-gray-800' href="#">...</Link></li>
                    <li><Link className='border border-slate-200 inline-block py-2 px-2 text-gray-800' href="#">9</Link></li>
                    
                </ul>
                <Link className='border border-slate-200 inline-block  mr-2 py-3 px-2 text-gray-800' href="#"><IoIosArrowBack /></Link>
              </div>
              
        </div>
    );
};

export default UsersList;