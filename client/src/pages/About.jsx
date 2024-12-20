import React from 'react';
import { Code, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <div className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Our Mission</h1>
          <p className="mt-4 text-xl">
            At SecureConnect, our mission is to make the digital world a safer place for everyone.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <ValueCard
              icon={<Code className="h-8 w-8" />}
              title="Innovation"
              description="Constantly pushing the boundaries of cybersecurity technology"
            />
            <ValueCard
              icon={<Users className="h-8 w-8" />}
              title="User-First"
              description="Designing solutions with our users' needs at the forefront"
            />
            <ValueCard
              icon={<Zap className="h-8 w-8" />}
              title="Integrity"
              description="Maintaining the highest standards of security and trust"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Meet Our Team</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <TeamMember
              name="Alex Thompson"
              role="CEO & Founder"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              linkedin="#"
            />
            <TeamMember
              name="Lisa Chen"
              role="CTO"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              linkedin="#"
            />
            <TeamMember
              name="David Kim"
              role="Head of Security"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              linkedin="#"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 flex flex-col items-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                <FAQ
                  question="How secure is your platform?"
                  answer="We use industry-leading encryption and security protocols to ensure your data is always protected."
                />
                <FAQ
                  question="What kind of support do you offer?"
                  answer="We provide 24/7 technical support through email and phone for all our customers."
                />
                <FAQ
                  question="How can I get started?"
                  answer="Simply sign up for an account and our team will guide you through the setup process."
                />
              </div>
            </div>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, image, linkedin }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <a
        href={linkedin}
        className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
      >
        LinkedIn Profile
      </a>
    </div>
  );
}


function FAQ({ question, answer }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-lg font-medium text-gray-900">{question}</h3>
      <p className="mt-2 text-gray-600">{answer}</p>
    </div>
  );
}