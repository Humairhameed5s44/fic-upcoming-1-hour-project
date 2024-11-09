// pages/contact.tsx

import React from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Fazaia Inter College Korangi Creek</title>
      </Head>
      <div className="container mx-auto my-8 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Fazaia Inter College Korangi Creek</h1>
        <Navbar></Navbar>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          {/* Location Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Location</h2>
            <p className="text-gray-600 mb-2">
              Fazaia Inter College Korangi Creek<br />
              Korangi Creek, Karachi, Pakistan
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9577696849217!2d67.15780507456447!3d24.86528447922914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d5a5b5afc7d%3A0x6399dbf8a3dfda6d!2sFazaia%20Inter%20College%20Korangi%20Creek!5e0!3m2!1sen!2s!4v1632847335957!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +92 21 1234 5678</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> contact@fazaia-korangi.edu.pk</p>
            <p className="text-gray-600"><strong>Office Hours:</strong> Monday - Friday, 9:00 AM to 4:00 PM</p>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
