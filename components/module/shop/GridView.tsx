"use client";

import Image from "next/image";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const GridView = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
 
    { img:"/images/users/user-36-01.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-02.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-03.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-04.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-05.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-06.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-07.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-08.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
    { img:"/images/users/user-36-09.jpg",name: "Tesla", email: "Model Y", location: 64950,order:24,lastorder:"#546564" ,totalspent:32135, refunds: 4 },
  
  ]);



 

  return (
    <div className=" relative px-4 py-4">
      <div className="py-4 px-4 border-b border-b-gray-200 mb-5 text-lg ">
        <span>تمام مشتری ها 248</span>
      </div>

      <div className="">
        <div className="overflow-x-scroll">
        <table className="w-full min-w-[768px] text-center">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>سفارش دهنده</th>
              <th>ایمیل</th>
              <th>لوکیشن</th>
              <th>سفارش ها</th>
              <th>آخرین سفارش</th>
              <th>جمع هزینه</th>
              <th>بازپرداخت</th>
            </tr>
          </thead>
          <tbody className="">
            {
               rowData.map((item,index)=>(
                <tr key={index} className="border-b border-gray-200">
                     <td> <input type="checkbox" />   </td>
                        <td className="flex justify-center items-center gap-2 py-4"> 
                            <Image src={item.img} width={40}  height={40} className="rounded-full" alt="user image"/>   
                            {item.name}
                            </td>
                        <td>  {item.email}  </td>
                        <td>   {item.location} </td>
                        <td>  {item.order}  </td>
                        <td>   {item.lastorder} </td>
                        <td>  {item.totalspent}  </td>
                        <td>  {item.refunds}  </td>
                        <td>   <CiMenuKebab /> </td>
                       
                </tr>
               )) 
            }
          </tbody>
        </table>
        </div>
        <div>
            <div className="flex justify-between items-center my-5 px-5">
            <span className="flex justify-start text-sm items-center gap-3 bg-indigo-600 text-white py-2 px-4 rounded-lg">
                <MdArrowForwardIos />
                <span>
                    قبلی
                </span>
                </span>

                <span>نمایش 1 تا 10 از 487 آیتم</span>

                <span className="flex justify-start text-sm items-center gap-3 bg-indigo-400 text-white py-2 px-4 rounded-lg">
                    <span>بعدی</span>
                <MdArrowBackIos />
                </span>
      
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default GridView;
