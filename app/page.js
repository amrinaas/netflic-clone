import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/images/logo.png';
import Background from '/assets/images/homepage.jpg';

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="bg-black/70 h-svh">
        <div className="h-1/6 px-10 py-7">
          <Link href="/">
            <Image src={Logo} width={110} height={110} alt="logo" />
          </Link>
        </div>
        <div className="h-5/6 flex flex-col justify-center items-center">
          <h1 className="md:text-5xl text-3xl md:px-0 px-3 font-bold tracking-wider my-3 text-center">
            Unlimited movies, TV Shows, and more.
          </h1>
          <p className="text-xl my-3">Watch anywhere. Cancel anytime</p>
          <p className="mb-3">Ready to watch?</p>
          <button className="bg-red-600 border-1 border-white px-5 py-3 rounded-lg hover:bg-red-400">
            <Link href="/browse">Get started</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
