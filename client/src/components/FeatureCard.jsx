import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <div className="p-3 bg-indigo-100 rounded-full text-indigo-600 text-2xl">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
}