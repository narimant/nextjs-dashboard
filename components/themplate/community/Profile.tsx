"use client"
import Image from "next/image";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { LuLink } from "react-icons/lu";
import { MdArrowBackIos } from "react-icons/md";
import { SiBmw } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { SiPorsche } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
const Profile = () => {
    const [showMember,setShowMember]=useState(false);
  return (
    <div className="flex bg-white  h-[calc(100vh-4rem)]  ">
      {/* sidebar */}
      <div className={`${showMember ? 'absolute' : 'hidden'} inset-0 z-50  lg:basis-1/5 bg-white lg:inline-block border-l border-l-gray-200 lg:sticky `}>
        <div className=" flex justify-between px-5 lg:justify-center items-center">
         <div className="relative" >
         <input
            type="text"
            placeholder="جست و جو"
            className="border text-sm w-5/6 py-2 pr-7 rounded-md my-4"
          />
          <IoIosSearch className="absolute right-2 top-6" size={20} />
        </div>
        <button className="lg:hidden border border-gray-200 p-2 text-gray-400 rounded-md" onClick={()=>setShowMember(false)}><IoMdClose /></button>
        </div>

        <div className="px-4 ">
          <h2 className="text-sm font-light">اعضای تیم</h2>

          <div className="py-5 overflow-y-scroll no-scrollbar  ">
            <button className="flex justify-start items-center gap-2 text-sm bg-indigo-300 w-full py-1 px-2 rounded-md">
              <Image
                src="/images/users/user-36-01.jpg"
                width={35}
                height={35}
                alt="user image"
                className="rounded-full"
              />
              <span>نریمان تاتاری</span>
            </button>
            <button className="flex justify-start items-center gap-2 text-sm  mt-2 w-full py-1 px-2 rounded-md">
              <Image
                src="/images/users/user-36-02.jpg"
                width={35}
                height={35}
                alt="user image"
                className="rounded-full"
              />
              <span>غلام سیادی</span>
            </button>
            <button className="flex justify-start items-center gap-2 text-sm  mt-2 w-full py-1 px-2 rounded-md">
              <Image
                src="/images/users/user-36-03.jpg"
                width={35}
                height={35}
                alt="user image"
                className="rounded-full"
              />
              <span> مجتبی جعفری</span>
            </button>
            <button className="flex justify-start items-center gap-2 text-sm mt-2  w-full py-1 px-2 rounded-md">
              <Image
                src="/images/users/user-36-04.jpg"
                width={35}
                height={35}
                alt="user image"
                className="rounded-full"
              />
              <span>محمد علی زاد </span>
            </button>
            <button className="flex justify-start items-center gap-2 text-sm  mt-2 w-full py-1 px-2 rounded-md">
              <Image
                src="/images/users/user-36-05.jpg"
                width={35}
                height={35}
                alt="user image"
                className="rounded-full"
              />
              <span> فاطمه حسینی</span>
            </button>
            <button className="flex justify-start items-center gap-2 text-sm w-full mt-2 py-1 px-2 rounded-md">
              <Image
                src="/images/users/user-36-06.jpg"
                width={35}
                height={35}
                alt="user image"
                className="rounded-full"
              />
              <span>رحمان رستمی </span>
            </button>
          </div>
        </div>
      </div>

      {/* main side */}
      <div className=" relative overflow-y-scroll no-scrollbar basis-full lg:basis-4/5 pb-8">
        <Image
          src="/images/user-background/profile-bg.jpg"
          width={1000}
          height={200}
          alt="use background"
          className="w-full h-auto"
        />

        {/* background */}
        <div className="flex justify-between items-center px-5 -mt-14 h-28 absolute w-full">
          <Image
            src="/images/users/user-36-01.jpg"
            width={120}
            height={120}
            alt="user image"
            className="self-start rounded-full right-10 top-44 bg-white p-[3px]"
          />
          <div className="flex justify-end items-end gap-3 self-end">
          <button  className=" lg:hidden border border-gray-200 text-sm py-1 rounded-md px-2" onClick={()=>setShowMember(true)}>اعضا تیم</button>
            <button className="p-1 rounded-md border border-gray-200">
              <TbMessageCircle size={20} />
            </button>
            <button className="btn-purple-sm">دنبال کردن</button>
          
          </div>
        </div>

        {/* profile detail */}
        <div className="mt-20 px-5">
          <h2 className="px-5 font-bold">نریمان تاتاری</h2>
          <div className="px-5 text-gray-500 text-sm">
            <p>ورزش و پیاده روی ، برنامه نویسی فرانت اند و عاشق تکنولوژی</p>
          </div>

          <div className="flex justify-start gap-5 items-center text-gray-500 px-5 py-4 ">
            <span className="flex justify-start items-center gap-2 text-sm">
              <GrLocation />
              <span>Iran,Tehran</span>
            </span>

            <span className="flex justify-start items-center text-sm gap-2">
              <LuLink />
              <Link
                href="http://www.linkedin.com/in/nariman-tatari"
                className="text-purple-600"
              >
                Linkdin
              </Link>
            </span>
          </div>
        </div>

        <div className="px-5">
          <div className="border-b border-b-gray-200">
            <ul className="flex text-sm  gap-5 items-center child:py-2">
              <li className="border-b border-b-purple-600">
                <Link href="#" className="text-purple-600">
                  عمومی
                </Link>
              </li>
              <li>
                <Link href="#">ارتباطات</Link>
              </li>
              <li>
                <Link href="#">مشارکت ها</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* about me */}
        <div className="px-5 py-5">
         
          <div>
            <h2 className=" font-bold">درباره من</h2>
            <p className="text-sm font-light leading-6">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
              گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
              ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
              تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
              معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و
              بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند
              که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد
              چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            </p>
          </div>
        </div>

        {/* departemant  */}
        <div className="px-5">
        <h2 className="font-bold">بخش ها</h2>
        <div className="grid grid-cols-12 gap-5 ">

            <div className="flex-col border px-3 py-4 border-gray-200 rounded-md flex justify-between items-start col-span-6">
                <h3 className="font-medium text-sm">دیجیتا مارکتینگ</h3>
                <div className="text-xs">
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
                </div>
                <div className=" flex justify-between items-center w-full mt-5">
                    <span className="flex justify-start items-center  w-auto">
                        <Image src="/images/users/user-36-01.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute  z-[5]"/>
                        <Image src="/images/users/user-36-02.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute mr-[15px] z-[10]"/>
                        <Image src="/images/users/user-36-04.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute mr-[30px] z-[15]"/>
                        <Image src="/images/users/user-36-05.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute mr-[45px] z-[20]"/>
                    </span>
                    <span className="flex justify-start items-center gap3 text-xs">
                    <Link href="#">نمایش</Link>
                        <MdArrowBackIos />
                        
                    </span>
                </div>
            </div>

            <div className="flex-col border px-3 py-4 border-gray-200 rounded-md flex justify-between items-start col-span-6">
                <h3 className="font-medium text-sm">دیجیتا مارکتینگ</h3>
                <div className="text-xs">
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
                </div>
                <div className=" flex justify-between items-center w-full mt-5">
                    <span className="flex justify-start items-center  w-auto">
                        <Image src="/images/users/user-36-01.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute  z-[5]"/>
                        <Image src="/images/users/user-36-02.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute mr-[15px] z-[10]"/>
                        <Image src="/images/users/user-36-04.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute mr-[30px] z-[15]"/>
                        <Image src="/images/users/user-36-05.jpg" width={30} height={30} alt="user image" className="bg-white rounded-full p-[2px] absolute mr-[45px] z-[20]"/>
                    </span>
                    <span className="flex justify-start items-center gap3 text-xs">
                    <Link href="#">نمایش</Link>
                        <MdArrowBackIos />
                        
                    </span>
                </div>
            </div>


        </div>
        </div>

        {/* work history */}
        <div className="px-5 mt-5 ">
        <h2 className="font-bold"> تاریخچه شغل ها</h2>

        <div className="border border-gray-200 rounded-sm py-5 px-4 mt-3">
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                    <SiBmw size={30} className="text-white bg-indigo-600 p-1 rounded-full"/>
                        <span>
                        <h3 className="text-sm"> طراح ارشد محصول</h3>
                        <p className="text-xs text-gray-500">
                            <span>ریموت</span>
                            <span>April, 2020 - Today</span>
                        </p>
                        </span>
                    </div>
                <div className="text-xs font-light flex gap-3"> 
                    <button className="py-1 px-2 border border-gray-200 rounded-lg">مارکتینگ</button>
                    <button className="py-1 px-2 border border-gray-200 rounded-lg">4+</button>
                </div>
            </div>
        </div>
        <div className="border border-gray-200 rounded-sm py-5 px-4 mt-3">
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                    <SiPorsche size={30} className="text-white bg-red-600 p-1 rounded-full"/>
                        <span>
                        <h3 className="text-sm"> طراح ارشد محصول</h3>
                        <p className="text-xs text-gray-500">
                            <span>ریموت</span>
                            <span>April, 2020 - Today</span>
                        </p>
                        </span>
                    </div>
                <div className="text-xs font-light flex gap-3"> 
                    <button className="py-1 px-2 border border-gray-200 rounded-lg">مارکتینگ</button>
                    <button className="py-1 px-2 border border-gray-200 rounded-lg">4+</button>
                </div>
            </div>
        </div>
        <div className="border border-gray-200 rounded-sm py-5 px-4 mt-3">
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                    <FaWordpressSimple size={30} className="text-white bg-green-600 p-1 rounded-full"/>
                        <span>
                        <h3 className="text-sm"> طراح ارشد محصول</h3>
                        <p className="text-xs text-gray-500">
                            <span>ریموت</span>
                            <span>April, 2020 - Today</span>
                        </p>
                        </span>
                    </div>
                <div className="text-xs font-light flex gap-3"> 
                    <button className="py-1 px-2 border border-gray-200 rounded-lg">مارکتینگ</button>
                    <button className="py-1 px-2 border border-gray-200 rounded-lg">4+</button>
                </div>
            </div>
        </div>


        </div>


      </div>
    </div>
  );
};

export default Profile;
