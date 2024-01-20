import GridView from '@/components/module/shop/GridView';
import PageTop from '@/components/module/PageTop';
import React from 'react';

const Customers = () => {
    return (
        <>
           <PageTop title='مشتری ها' buttonText='افزودن مشتری'/> 
           <div className='relative bg-white h-auto mt-5 dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700 cetne'>
              
                <GridView />
                
           </div>
        </>
    );
};

export default Customers;