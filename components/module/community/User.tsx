import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import {  } from "react-icons/gr";
type dataProps={
   data:{
    img:string;
    job:string;
    name:string;
    info:string;
   }
};

const User = ({data}:dataProps) => {
    return (
        <div className='p-5 shadow-lg bg-white dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700 col-span-full lg:col-span-4 '>
         <div className='flex justify-between items-center'>
           <span className='flex justify-start items-center gap-3' >
           <Image src={data.img} width={70} height={70} alt='user image'  className='rounded-full'/>
            <span >
            <h2>{data.name}</h2>
            <span className='text-xs'>{data.job}</span>
            </span>
           </span>
            <button><CiMenuKebab /></button>
         </div>
           <div className='my-5'>
            {data.info}
           </div>
           <div className='flex justify-between items-center'>
            <Link href="#" className='flex w-1/2 justify-center gap-3 items-center text-blue-600' >
                    <BiMessageRounded size={25} />
                <span>ارسال پیام</span>
                </Link>
            <Link  href="#"  className='flex w-1/2  justify-start gap-3 items-center text-gray-500'>
            <GrEdit />
                <span> ویرایش پروفایل</span>
                </Link>
           </div>
        </div>
    );
};

export default User;