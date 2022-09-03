import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';
const CLEAR_TIMEOUT = 5000;

const Contact = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setSubmitted(false);
    }, CLEAR_TIMEOUT);
  }, [submitted]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clientId = process?.env?.NEXT_PUBLIC_EMAILJS_PUBLIC_ID;
    const serviceId = process?.env?.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process?.env?.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!(form.current && clientId && serviceId && templateId))
      throw new Error('There is an error with the form');

    emailjs.sendForm(serviceId, templateId, form.current, clientId).then(
      () => {
        setSubmitted(true);
      },
      (error) => {
        setSubmitted(false);
        throw new Error(error.text);
      }
    );
  };

  return (
    <div className='layout tems-center dropped-height flex min-h-screen flex-col justify-center pr-1 pl-1'>
      <div className='tems-center mx-auto flex max-w-md flex-col justify-center overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl'>
        <Seo templateTitle='Contact us' />

        {submitted ? (
          <>
            <div className='text-2xl'>Thank you!</div>
            <div className='text-md'>We&apos;ll be in touch to you soon.</div>
          </>
        ) : (
          <>
            <div className='mb-3 pt-0'>
              <h3 className='text-s text-center text-gray-400'>Contact Us</h3>
            </div>
            <form
              className='mb-4 rounded bg-white px-8 pt-6 pb-8'
              ref={form}
              onSubmit={sendEmail}
            >
              <div className='mb-3 pt-0'>
                <input
                  type='text'
                  placeholder='Your name'
                  name='name'
                  className='relative w-full rounded border-0 bg-white bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
                  required
                />
              </div>
              <div className='mb-3 pt-0'>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  className='relative w-full rounded border-0 bg-white bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
                  required
                />
              </div>
              <div className='mb-3 pt-0'>
                <textarea
                  placeholder='Your message'
                  name='message'
                  className='relative w-full rounded border-0 bg-white bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
                  required
                />
              </div>
              <div className='mb-3 pt-0'>
                <Button type='submit'>Send a Message</Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
