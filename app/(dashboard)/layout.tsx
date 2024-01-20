"use client"
import '../globals.css'
import Sidebar from '@/components/themplate/Sidebar'
import Header from '@/components/themplate/Header'
import { useState } from 'react'





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="fa" dir='rtl' >
      <body className="flex h-screen overflow-hidden">

          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
   


         {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        {children}
        </div>
      
        </body>
    </html>
  )
}
