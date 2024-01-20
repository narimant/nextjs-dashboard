"use client"
import React from 'react';
import { BarElement, CategoryScale, Chart as ChartJS, Tooltip, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line,Radar } from "react-chartjs-2";
const DashboardCard = () => {
  ChartJS.register(
    BarElement,
    Tooltip,
    CategoryScale

  )


    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
        
          {/* Menu button */}
          
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Acme Plus</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="w-full">
       <Line
       className='w-full'
       data={{
        labels:["a","b","c","d","e","f"],
        datasets:[
          {
            label:"test",
            data:[200,300,400,100,600,350]
          },
          {
            label:"test2",
            data:[600,500,100,750,300,150]
          }
        ]
       }}
        />
      </div>
    </div>
    );
};

export default DashboardCard;