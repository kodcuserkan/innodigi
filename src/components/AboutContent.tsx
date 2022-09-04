import Link from 'next/link';
import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export const AboutContent = () => {
  return (
    <div className='container mx-auto'>
      <main className='mt-12 flex h-full w-full flex-col items-center'>
        <h3 className='mt-3 text-3xl font-normal transition-all dark:text-white'>
          We specialize in custom-tailored software solutions
        </h3>
        <p className='mt-2 text-sm text-gray-800'>
          Our global team of consultants works in managed teams and productized
          consulting engagements that leave behind clear deliverables,
          measurable change, and knowledge sharing. We create client
          relationships, not dependencies.
        </p>

        <br className='md:hidden' />

        <h3 className='mt-3 text-2xl font-normal transition-all dark:text-white'>
          Our unique culture
        </h3>
        <p className='mt-2 text-sm text-gray-800'>
          Our culture thrives, not in any document, but in the experiences of
          our team. Creating Innodigi is a celebration of digies, past and
          present. Let us take you on a journey across Innodigiland.
        </p>

        <br className='md:hidden' />

        <h3 className='mt-3 text-2xl font-normal transition-all dark:text-white'>
          What we do?
        </h3>
        <p className='mt-2 text-sm text-gray-800'>
          Our technical expertise, broad solutions portfolio and supply chain
          capabilities give us the right resources and scale to achieve more for
          you.
        </p>

        <br className='md:hidden' />

        <div className='my-3 text-center text-xl font-light dark:text-white'>
          <a
            target='_blank'
            href='/'
            className='cursor-pointer transition-all hover:text-purple-700 dark:hover:text-green-500'
          >
            Best Tech, Best Future
          </a>
          <span className='hidden transition-all md:inline'> | </span>
          <br className='md:hidden' />
          <a
            target='_blank'
            href='/'
            className='cursor-pointer transition-all hover:text-purple-700 dark:hover:text-green-500'
          >
            A power that Shines you
          </a>
          <span className='hidden transition-all md:inline'> | </span>
          <br className='md:hidden' />
          <Link href='/'>
            <a className='cursor-pointer transition-all hover:text-purple-700 dark:hover:text-green-500'>
              The joy of Tech Spirit
            </a>
          </Link>
          <br className='md:hidden' />
        </div>
        <hr className='w-full border-black dark:border-white' />
        <div className='mt-4 w-4/5 text-left'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>
            <div className='mt-3'></div>
            <div className='mt-3'></div>
          </div>
          <div className='mt-2 mb-20 flex justify-center text-right dark:text-white lg:mt-6'>
            <UnderlineLink href='/contact'>
              Our Technology, A New Passion
            </UnderlineLink>
          </div>
          {/* <Fade bottom>
      </Fade> */}
        </div>
      </main>
    </div>
  );
};
