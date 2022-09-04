import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

import Button from '@/components/buttons/Button';

export const ContactForm = ({
  setSubmitted,
}: {
  setSubmitted: (submitted: boolean) => void;
}) => {
  const form = useRef<HTMLFormElement>(null);

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
  );
};
