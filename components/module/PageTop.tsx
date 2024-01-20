import React from 'react';
import { FaPlus } from "react-icons/fa6";
type PageProps={
    title:string;
    buttonText:string
}
const PageTop = ({title,buttonText}:PageProps) => {
    return (
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>
                <span>{title}</span>
            </h1>
            <button className='flex justify-start items-center gap-2 py-2 px-3 bg-indigo-600 rounded-lg text-white font-light' >
                <FaPlus className='text-indigo-400'/>
                <span>
                    {buttonText}
                    </span>
            </button>
        </div>
    );
};

export default PageTop;