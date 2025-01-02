import React, { useState } from "react";
import { ArrowRight, Globe, List, Rocket, Check } from "lucide-react";
import Constants from '../constants';

const Home = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("First Name submitted:", firstName);
    console.log("Email submitted:", email);

    // Send data to the backend
    const response = await fetch(Constants.backendApiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email }),
    });

    const result = await response.json();
    console.log(result.message);
  };

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "TITLE 1",
      description: "BLAH BLAH BLAH"
    },
    {
      icon: <List className="w-6 h-6" />,
      title: "TITLE 2",
      description: "BLAH BLAH BLAH"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "TITLE 3",
      description: "BLAH BLAH BLAH"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{Constants.platformName}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6 leading-tight">
            Your TITLE HERE
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            QUICK TAGLINE
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
              className="flex-1 px-1 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="flex-1 px-1 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2"
            >
              Early Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* <div className="mt-8 flex justify-center">
            <div className="relative flex items-center">
              <div className="absolute -left-4">
                <img src="/path/to/user1.jpg" alt="U1" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
              <div className="absolute -left-2">
                <img src="/path/to/user2.jpg" alt="U2" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
              <div className="absolute left-0">
                <img src="/path/to/user3.jpg" alt="U3" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
              <p className="text-gray-600">Be one of the first to join!</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Trusted by Industry Leaders</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-50">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 w-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="space-y-8">
            {[
              "Advanced AI agent Hub with verified providers",
              "Secure and scalable infrastructure",
              "24/7 support and monitoring",
              "Custom integration options"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-4 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} {Constants.platformName} All rights reserved. 
            <a href="/privacy" className="text-blue-600 hover:underline"> Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;