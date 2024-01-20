
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type submenu={ 
    title: string;
    src: string;
};
const SideBarMenuItem = ({menuItem}:any) => {
    const [subMenu,setSubMenu]=useState(false)
    const router=usePathname();
    useEffect(()=>{
        console.log('mainpath',menuItem.mainPath);
        console.log('router',router);
       
    },[])
    return (

        <ul className={`w-full text-white font-semibold`}>
            <li className={`  px-4 py-2`}>
                <button onClick={()=>setSubMenu(!subMenu)} className='text-gray-400 flex justify-between w-full items-center gap-3 py-2'>
                   <span className='flex justify-start gap-2 items-center'>
                   <span className={`${router===menuItem.mainPath && `text-indigo-600`} text-xl`}>{menuItem.icon}</span>
                    <span className='text-white'>{menuItem.title}</span>
                   </span>
                    {subMenu ? (<IoIosArrowDown />) : (<IoIosArrowUp />)}
                    </button>

                    {/* Sub menu */}
                <ul className={`${!subMenu && `hidden` }   min-h-7 px-5`}>
                {menuItem.subMenus && menuItem.subMenus.map((item:submenu,index:number)=>(
                        <li key={index} className={`py-2 px-2 text-gray-300  ${router===menuItem.mainPath && `text-indigo-600`}`}>
                            <Link href={item.src} >{item.title}</Link>
                            </li>
                ))}
                </ul>
            </li>

        </ul>
    );
};

export default SideBarMenuItem;