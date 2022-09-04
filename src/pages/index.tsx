import Image from 'next/image';
import * as React from 'react';

import Seo from '@/components/Seo';

// import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <section>
          <div className='layout dropped-height flex min-h-screen flex-col items-center justify-center text-center'>
            {/* <Vercel className='text-5xl' /> */}
            <Image
              src='/favicon/android-chrome-192x192.png'
              alt='Site Logo'
              width={192}
              height={192}
            />
            <h1 className='mt-4'>Welcome to innodigi.net</h1>
            <p className='mt-2 text-sm text-gray-800'>Coming soon!</p>
          </div>
        </section>
      </main>
    </>
  );
}
