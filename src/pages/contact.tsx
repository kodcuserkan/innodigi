import React, { useState } from 'react';

import Button from '@/components/buttons/Button';

const FORM_ENDPOINT = '';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className='text-2xl'>Thank you!</div>
        <div className='text-md'>We&apos;ll be in touch soon.</div>
      </>
    );
  }

  return (
    <div
      className='h-screen flex flex-col 
    items-center justify-center'
    >
      <div className='mb-3 pt-0'>
        <h3 className='text-center text-gray-400 text-s'>Contact Us</h3>
      </div>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method='POST'
        target='_blank'
      >
        <div className='mb-3 pt-0'>
          <input
            type='text'
            placeholder='Your name'
            name='name'
            className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
            required
          />
        </div>
        <div className='mb-3 pt-0'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
            required
          />
        </div>
        <div className='mb-3 pt-0'>
          <textarea
            placeholder='Your message'
            name='message'
            className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
            required
          />
        </div>
        <div className='mb-3 pt-0'>
          <Button type='submit'>Send a Message</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
