import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import FeatureCard from "../components/FeatureCard"
import TestimonialCard from "../components/TestimonialCard"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { userData } = useContext(AppContext);
  const navigate = useNavigate();

  const features = [
    {
      icon: "🔒",
      title: "Advanced Encryption",
      description: "State-of-the-art encryption protocols to secure your data",
    },
    {
      icon: "🔔",
      title: "Real-time Monitoring",
      description: "Instant alerts for potential security threats",
    },
    {
      icon: "💾",
      title: "Secure Storage",
      description: "Protected cloud storage for sensitive information",
    },
    {
      icon: "🛡️",
      title: "Log History",
      description: "We Provide you with the log history for improving reliability.",
    },
  ];

  const testimonials = [
    {
      quote:
        "SecureConnect has transformed how we handle security at our company.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      quote: "The best security solution we've used. Simple yet powerful.",
      author: "Michael Chen",
      role: "Security Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      quote: "Outstanding support and robust security features.",
      author: "Emma Davis",
      role: "IT Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <div className="w-full">
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold">
              Welcome {userData ? userData.name : "Developer"}!
              </h1>
              <p className="mt-4 text-xl text-indigo-100">
                Your Gateway to Online Safety
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                {!userData  && <button onClick={()=>navigate("/login")} className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-50">
                  Get Started
                </button>}
                <button onClick={()=>navigate("/about")} className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              <p className="mt-4 text-xl text-gray-600">
                Protecting your digital identity with cutting-edge security
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-100 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              What Our Users Say
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
