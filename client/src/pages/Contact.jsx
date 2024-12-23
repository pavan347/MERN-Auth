import React, { useContext, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';
import { AppContext } from "../context/AppContext";
import { toast } from 'react-toastify';

export default function Contact() {

  const {backendUrl} = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formData.name && formData.email && formData.subject && formData.message) {
      
        const {data} = await axios.post(backendUrl + "/api/auth/send-mail", {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }); 
  
        if(data.success){
          toast.success(data.message);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        }else{
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Header */}
      <div className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl">
            We're here to help with your security needs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md  border-indigo-500 shadow-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
            <div className="mt-8 space-y-6">
              <ContactInfo
                icon={<Mail className="h-6 w-6" />}
                title="Email"
                content="contact@secureconnect.com"
              />
              <ContactInfo
                icon={<Phone className="h-6 w-6" />}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<MapPin className="h-6 w-6" />}
                title="Address"
                content="Paritala, Amrita Sai"
              />
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, content }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{content}</p>
      </div>
    </div>
  );
}
