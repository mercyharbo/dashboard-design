import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center m-auto h-screen'>
      <Link href='dashboard' className='text-orange text-4xl'>
        Go to dashboard{' '}
      </Link>
    </main>
  )
}
