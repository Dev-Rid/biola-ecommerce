import React from 'react';
import { Users, Award, Globe, Heart, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers in mind. Your satisfaction is our success.'
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: 'Quality Excellence',
      description: 'We source only the highest quality products and maintain rigorous standards in everything we do.'
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: 'Global Impact',
      description: 'Building sustainable partnerships worldwide while making a positive impact on local communities.'
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      title: 'Innovation',
      description: 'Constantly evolving our platform and services to provide the best shopping experience.'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '50K+', label: 'Products' },
    { number: '100+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Visionary leader with 15+ years in e-commerce'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Tech expert passionate about user experience'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Operations specialist ensuring smooth delivery'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 bg-gradient-to-r from-[rgb(54,117,107)] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
              About Biola<span className='text-yellow-500'>Mart</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              We're on a mission to revolutionize online shopping by providing exceptional products, 
              outstanding service, and an unmatched customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50 bg-gradient-to-r from-[rgb(54,117,107)] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className=''>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2018, ShopHub started as a small startup with a big vision: to create 
                  the most customer-centric e-commerce platform in the world. What began as a dream 
                  has now grown into a global marketplace serving millions of customers.
                </p>
                <p>
                  Our journey hasn't always been easy, but our commitment to quality, innovation, 
                  and customer satisfaction has remained unwavering. We've built partnerships with 
                  trusted suppliers worldwide and developed cutting-edge technology to ensure every 
                  shopping experience is seamless and delightful.
                </p>
                <p>
                  Today, we're proud to be a leading e-commerce platform, but we're just getting 
                  started. Our vision extends far beyond transactions – we're building a community 
                  where people can discover, connect, and find exactly what they need.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team working"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg">
                <Target className="h-8 w-8 mb-2" />
                <p className="font-semibold">Mission Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white bg-gradient-to-r from-[rgb(54,117,107)] to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-200 mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core values guide every decision we make and every interaction we have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind ShopHub who work tirelessly to bring you the best experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Become part of the ShopHub family and experience the difference that comes with 
            shopping with a company that truly cares about its customers.
          </p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Shopping Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;