import DashboardCard from '@/components/module/Cards/DashboardCard'
import DashboardCard2 from '@/components/module/Cards/DashboardCard2'
import DashboardCard3 from '@/components/module/Cards/DashboardCard3'
import TopChannel from '@/components/module/Cards/TopChannel'
import WelcomeBanner from '@/components/module/WelcomeBanner'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

       {/* Welcome banner */}
      <WelcomeBanner />

    {/* Dashboard cards */}
  
    <div className='grid grid-cols-12 gap-6'>
{/* charts */}
 <DashboardCard  />
 <DashboardCard  />
 <DashboardCard  />
 <DashboardCard  />
 {/* top chanels */}
 <TopChannel />

 {/* Card (Income/Expenses) */}
<DashboardCard2 />
   {/* Card (Recent Activity) */}
   <DashboardCard3 />
    </div>
   
    </main>
  )
}
