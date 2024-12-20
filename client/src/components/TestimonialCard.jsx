import React from 'react';

export default function TestimonialCard({ quote, author, role, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 italic">"{quote}"</p>
      <div className="mt-4 flex items-center">
        <img
          src={image}
          alt={author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}