// import React from 'react'

// const Pricing = () => {
//     return (
//         <div>
//             <h1>Pricing</h1>
//         </div>
//     )
// }

// export default Pricing









import React, { useState } from 'react';
import { FaCheck, FaTimes, FaFire, FaGem, FaRocket } from 'react-icons/fa';

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: annualBilling ? '$79/year' : '$9/month',
      description: 'Perfect for getting started',
      icon: <FaFire className="text-orange-500" size={24} />,
      features: [
        { text: '10 Projects', available: true },
        { text: '5 Team Members', available: true },
        { text: 'Analytics Dashboard', available: false },
        { text: 'Priority Support', available: false }
      ],
      featured: false
    },
    {
      name: 'Pro',
      price: annualBilling ? '$199/year' : '$19/month',
      description: 'Best for professionals',
      icon: <FaGem className="text-blue-500" size={24} />,
      features: [
        { text: 'Unlimited Projects', available: true },
        { text: '20 Team Members', available: true },
        { text: 'Advanced Analytics', available: true },
        { text: 'Priority Support', available: false }
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: annualBilling ? '$499/year' : '$49/month',
      description: 'For large scale businesses',
      icon: <FaRocket className="text-purple-500" size={24} />,
      features: [
        { text: 'Unlimited Projects', available: true },
        { text: 'Unlimited Team Members', available: true },
        { text: 'Advanced Analytics', available: true },
        { text: '24/7 Priority Support', available: true }
      ],
      featured: false
    }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Start with a free trial, no credit card required.
        </p>
        
        <div className="flex justify-center items-center mt-6">
          <span className={`mr-4 font-medium ${!annualBilling ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setAnnualBilling(!annualBilling)}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${annualBilling ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <span
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${annualBilling ? 'translate-x-8' : ''}`}
            />
          </button>
          <span className={`ml-4 font-medium ${annualBilling ? 'text-gray-900' : 'text-gray-400'}`}>Annually <span className="text-blue-600">(20% off)</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden ${plan.featured ? 'border-2 border-blue-500 transform md:-translate-y-4' : 'border border-gray-200'}`}
          >
            {plan.featured && (
              <div className="bg-blue-500 text-white text-center py-2 font-bold">
                Most Popular
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center mb-4">
                {plan.icon}
                <h2 className="text-2xl font-bold ml-3">{plan.name}</h2>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium ${plan.featured ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition-colors duration-300`}
              >
                Get Started
              </button>
              
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    {feature.available ? (
                      <FaCheck className="text-green-500 mr-2" />
                    ) : (
                      <FaTimes className="text-red-500 mr-2" />
                    )}
                    <span className={feature.available ? 'text-gray-800' : 'text-gray-400'}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>Need a custom plan? <a href="#contact" className="text-blue-600 hover:underline">Contact us</a></p>
      </div>
    </div>
  );
};

export default Pricing;
