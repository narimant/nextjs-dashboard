"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const DropDownHeader = () => {

    
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
        console.log(target);
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button 
       ref={trigger}
       onClick={() => setDropdownOpen(!dropdownOpen)}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <Image src='/dashboard/images/user-avatar-32.png' width={25} height={25} className="rounded-full" alt="user icon"/>
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
            Acme Inc.
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
          </svg>
        </div>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
      className={`${dropdownOpen ? `` :`hidden`} origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 right-0 enter-done`}>
        <div>
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 dark:border-slate-700">
            <div className="font-medium text-slate-800 dark:text-slate-100">
              Acme Inc.
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 italic">
              Administrator
            </div>
          </div>
          <ul>
            <li>
              <a
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                href="/settings"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                href="/signin"
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownHeader;
