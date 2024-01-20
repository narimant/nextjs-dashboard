import WelcomeBanner from '@/components/module/WelcomeBanner'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">

<div>
  <Link href='/dashboard' className='bg-green-400 text-white py-3 px-5 rounded-lg hover:bg-green-600'> Go To Dashboard</Link>
</div>


  

   
    </main>
  )
}
