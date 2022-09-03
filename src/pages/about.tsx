import Link from 'next/link';
import React from 'react';
import Fade from 'react-reveal/Fade';

import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

const About = () => {
  // const scrollToTop = () => {
  //   if (window) window.scrollTo({ top: 0, behavior: 'smooth' });
  //   return null;
  // };

  <Seo templateTitle='About us' />;

  return (
    <div>
      <div className='container mx-auto'>
        <main className='flex flex-col items-center h-full w-full mt-24'>
          <h3 className='text-3xl font-normal mt-3 dark:text-white transition-all'>
            We specialize in custom-tailored software solutions
          </h3>
          <p className='mt-2 text-sm text-gray-800'>
            Our global team of consultants works in managed teams and
            productized consulting engagements that leave behind clear
            deliverables, measurable change, and knowledge sharing. We create
            client relationships, not dependencies.
          </p>

          <br className='md:hidden' />

          <h3 className='text-2xl font-normal mt-3 dark:text-white transition-all'>
            Our unique culture
          </h3>
          <p className='mt-2 text-sm text-gray-800'>
            Our culture thrives, not in any document, but in the experiences of
            our team. Creating Innodigi is a celebration of digies, past and
            present. Let us take you on a journey across Innodigiland.
          </p>

          <br className='md:hidden' />

          <h3 className='text-2xl font-normal mt-3 dark:text-white transition-all'>
            What we do?
          </h3>
          <p className='mt-2 text-sm text-gray-800'>
            Our technical expertise, broad solutions portfolio and supply chain
            capabilities give us the right resources and scale to achieve more
            for you.
          </p>

          <br className='md:hidden' />

          <div className='text-xl font-light my-3 text-center dark:text-white'>
            <a
              target='_blank'
              href='/'
              className='cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all'
            >
              Best Tech, Best Future
            </a>
            <span className='md:inline hidden transition-all'> | </span>
            <br className='md:hidden' />
            <a
              target='_blank'
              href='/'
              className='cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all'
            >
              A power that Shines you
            </a>
            <span className='md:inline hidden transition-all'> | </span>
            <br className='md:hidden' />
            <Link href='/'>
              <a className='cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all'>
                The joy of Tech Spirit
              </a>
            </Link>
            <br className='md:hidden' />
          </div>
          <hr className='w-full border-black dark:border-white' />
          <div className='w-4/5 text-left mt-4'>
            <div className='grid md:grid-cols-2 md:gap-16 grid-cols-1'>
              <div className='mt-3'>
                {/* <EducationLists />
            <SkillLists />
            <WorkLists /> */}
              </div>
              <div className='mt-3'>
                {/* <TechnicalProjectLists />
            <BusinessProjectLists /> */}
              </div>
            </div>
            <Fade bottom>
              <div className='flex justify-center text-right lg:mt-6 mt-2 mb-20 dark:text-white'>
                <UnderlineLink href='/contact'>
                  Our Technology, A New Passion
                </UnderlineLink>
                {/* <span
                  onClick={() => scrollToTop()}
                  className='md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all'
                >
                  Up
                </span> */}
                {/* <Link href={ROUTES.CONTACT}>
              <a
                href="#"
                className="md:text-xl text-base font-semibold underline cursor-pointer hover:text-purple-700 dark:hover:text-green-500 transition-all"
              >
                {`${_.CONTACT_LINK_DESCRIPTION} ${_.ARROW_RIGHT_SYMBOL}`}
              </a>
            </Link> */}
              </div>
            </Fade>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
