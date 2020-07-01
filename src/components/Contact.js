import React from 'react'

const Contact = () => {
  return (
    <div className='container animate'>
      <h1 className='mt-5'>Get In Touch</h1>
      <form
        className='contact-form'
        action='https://formspree.io/moqjadrr'
        method='POST'>
        <div className='form-group'>
          <label for='full-name'>Full Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            id='full-name'
            placeholder='First and Last Name'
            required
          />
        </div>
        <div className='form-group'>
          <label for='email-address'>Email Address</label>
          <input
            type='email'
            className='form-control'
            name='_replyto'
            id='email-address'
            placeholder='email@domain.tld'
            required
          />
        </div>
        <div className='form-group'>
          <label for='message'>Message</label>
          <textarea
            rows='5'
            name='message'
            id='message'
            className='form-control'
            placeholder="What's the message?"
            required></textarea>
        </div>
        <input
          type='hidden'
          name='_subject'
          id='email-subject'
          value='Contact Form Submission'
        />
        <div className='mt-4'>
          <input
            className='btn btn-primary'
            type='submit'
            value='Send Message'
          />
        </div>
      </form>
    </div>
  )
}

export default Contact
