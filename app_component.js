// Copy the entire FunnelBayFlow component code from the artifact
// This is the complete 3-page flow with landing, setup, and journey pages
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowLeft, Check, Zap, Clock, ArrowRight, Rocket, Mail, Workflow, BarChart3 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [expandedSections, setExpandedSections] = useState({
    1: true,
    2: false,
    3: false,
    4: false
  });
  
  const [actionItems, setActionItems] = useState({
    basics: false,
    orderBumps: false,
    upsells: false,
    revenue: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleActionItem = (item) => {
    setActionItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const allCompleted = Object.values(actionItems).every(val => val);

  const launchSteps = [
    { number: 1, title: 'Sales Funnel Fundamentals', description: 'Learn about funnels, order bumps & upsells' },
    { number: 2, title: 'Platform Setup', description: 'Configure your business profile' },
    { number: 3, title: 'Digital Products', description: 'Set up your product library' },
    { number: 4, title: 'Payment Integration', description: 'Setup Stripe and PayPal processing' },
    { number: 5, title: 'Membership & Pricing', description: 'Configure products and pricing' },
    { number: 6, title: 'Sales Funnel Optimization', description: 'Build converting sales pages' },
    { number: 7, title: 'Custom Domain', description: 'Connect your professional domain' },
    { number: 8, title: 'Pre Launch Checks & Testing', description: 'Final testing and optimizations' }
  ];

  const automateSteps = [
    { icon: <Mail className="w-5 h-5" />, title: 'Email Marketing', description: 'Automated email sequences' },
    { icon: <Workflow className="w-5 h-5" />, title: 'Marketing Workflows', description: 'Smart automation workflows' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics & Tracking', description: 'Data-driven optimization' }
  ];

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Launch Your </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Digital Product
              </span>
              <span className="text-gray-900"> Fast</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our guided setup process gets your entire sales funnel, payment processing, 
              email automation, and analytics running quickly. Go from zero to selling 
              online in minutes.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 p-8 text-white">
              <div className="flex items-center mb-3">
                <Zap className="w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold">Quick Setup</h2>
              </div>
              <p className="text-purple-100">Launch your funnel in 30 minutes</p>
            </div>

            <div className="p-8">
              <div className="flex items-center mb-6 text-purple-600">
                <Clock className="w-5 h-5 mr-2" />
                <h3 className="font-semibold text-gray-900">12 guided steps</h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Platform setup & configuration</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Product & membership creation</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Sales funnel & payment setup</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Email automation & tracking</span>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-purple-700">Perfect for:</span> Getting your funnel live quickly with all essentials configured
                </p>
              </div>

              <button 
                onClick={() => setCurrentPage('setup')}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center group shadow-lg"
              >
                Start Quick Setup
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium">
              Don't have a FunnelBay account? Start your free trial
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <button 
              onClick={() => setCurrentPage('landing')}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Your Setup Path</h1>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Your FunnelBay Setup Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Start with Launch to get your funnel live, then advance to Automate for scaling
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8 items-start">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 p-6 text-white">
                <div className="flex items-center mb-2">
                  <Rocket className="w-6 h-6 mr-2" />
                  <h3 className="text-2xl font-bold">Launch</h3>
                </div>
                <p className="text-purple-100 mb-2">Get your funnel live and ready to sell</p>
                <p className="text-sm text-purple-200">Setup Time ~ 30 mins</p>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {launchSteps.map((step) => (
                    <div key={step.number} className="flex items-start py-2">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-semibold text-sm mr-3 mt-0.5">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-0.5">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setCurrentPage('journey')}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center group shadow-md"
                >
                  Start Launch Track
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 p-6 text-white">
                <div className="flex items-center mb-2">
                  <Zap className="w-6 h-6 mr-2" />
                  <h3 className="text-2xl font-bold">Automate</h3>
                </div>
                <p className="text-emerald-100 mb-2">Set up advanced automation & scaling</p>
                <p className="text-sm text-emerald-200">Setup Time ~ 20 mins</p>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {automateSteps.map((step, index) => (
                    <div key={index} className="flex items-start py-2">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 mt-0.5">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-0.5">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gray-300 text-gray-500 font-semibold py-3 rounded-lg cursor-not-allowed">
                  Complete Launch First
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Don't worry - you can always come back and complete the other track later
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setCurrentPage('setup')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Funnel/Bay Launch Track</h1>
          <button className="text-gray-600 hover:text-gray-900">Reset</button>
        </div>

        <div className="flex justify-between mb-8 relative">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
            <div key={step} className="flex flex-col items-center relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step === 1 ? 'bg-indigo-500 text-white' : 'bg-white text-gray-400 border-2 border-gray-200'
              }`}>
                {step}
              </div>
            </div>
          ))}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-0" />
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg p-6 mb-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Step 1: What is a Sales Funnel</h2>
              <p className="text-blue-100 text-sm">Complete understanding of sales funnels, order bumps, upsells, and revenue optimization strategies</p>
            </div>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center">
              <span className="mr-1">⏱</span> 6 min
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
          <button
            onClick={() => toggleSection(1)}
            className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                1
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">What is a Sales Funnel?</h3>
              </div>
            </div>
            {expandedSections[1] ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          
          {expandedSections[1] && (
            <div className="px-6 pb-6 pt-0">
              <p className="text-gray-600 mb-4 ml-12">
                A sales funnel is a strategic sequence of pages and offers designed to guide potential customers through a journey from initial interest to purchase and beyond.
              </p>
              <div className="ml-12 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">🎯 Key Goal:</span> Transform cold traffic into paying customers through a series of optimized touchpoints.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
          <button
            onClick={() => toggleSection(2)}
            className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                2
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900">Order Bumps: Instant Value Addition</h3>
              </div>
            </div>
            {expandedSections[2] ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          
          {expandedSections[2] && (
            <div className="px-6 pb-6 pt-0">
              <div className="ml-12">
                <div className="border rounded-lg p-4 mb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex">
                      <img src="/api/placeholder/80/80" alt="Product" className="w-20 h-20 object-cover rounded mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Sleiers Slim Fit Polo T-shirt For Men</h4>
                        <p className="text-sm text-gray-500">(Green, S)</p>
                        <div className="flex items-center mt-2">
                          <button className="w-6 h-6 border rounded">-</button>
                          <span className="mx-3">1</span>
                          <button className="w-6 h-6 border rounded">+</button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">€6.99</p>
                      <p className="font-bold text-gray-900">€5.99</p>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-teal-300 rounded-lg p-4 bg-teal-50">
                    <div className="flex items-start">
                      <img src="/api/placeholder/60/60" alt="Bundle" className="w-16 h-16 object-cover rounded mr-3" />
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 mb-1">⭐ Free Offer</h5>
                        <p className="text-sm text-gray-600 mb-3">
                          Aperiam consectetur quisquam Aperiam consectetur. Lorem Ipsum is simply dummy text of the printing.
                        </p>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-2 w-4 h-4" />
                          <span className="text-sm font-medium text-gray-900">
                            Yes! Add Complete Skin Care Pack to my order
                          </span>
                          <span className="ml-auto font-bold text-gray-900">€2.99</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Sub Total</span>
                    <span>€12.98</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total</span>
                    <span>€12.98</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  An order bump is a small, complementary offer presented on your checkout page.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">✅ Best Practices:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Keep the price low (10-30% of main offer)</li>
                      <li>• Make it highly relevant to product</li>
                      <li>• Use urgency and scarcity</li>
                      <li>• Position as "limited time" or exclusive</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">📊 Impact:</h5>
                    <p className="text-sm text-gray-700">
                      Well-executed order bumps can increase average order value by 20-50%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
          <button
            onClick={() => toggleSection(3)}
            className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                3
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900">One-Click Upsells & Downsells</h3>
              </div>
            </div>
            {expandedSections[3] ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          
          {expandedSections[3] && (
            <div className="px-6 pb-6 pt-0">
              <div className="ml-12">
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="bg-white rounded shadow-lg p-6 max-w-md mx-auto">
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Wait! Here's an exclusive offer!</h4>
                      <p className="text-sm text-gray-600">Add with just ONE click.</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start mb-4">
                        <img src="/api/placeholder/100/100" alt="Upsell" className="w-24 h-24 object-cover rounded mr-4" />
                        <div>
                          <h5 className="font-bold text-gray-900">Minimalist skin care Routine</h5>
                          <p className="text-2xl font-bold text-gray-900 mt-2">$135.00</p>
                        </div>
                      </div>
                      <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 mb-2">
                        Yes! Add to my Order
                      </button>
                      <button className="w-full text-gray-600 text-sm hover:text-gray-900">
                        No thanks
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">📈 Upsells (Higher Value Offers)</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      After a customer purchases, present them with a higher-value, premium version or complementary product.
                    </p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                      <span className="font-medium">Example:</span> Customer buys a $47 course → Offered a $197 advanced course + coaching package
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">💡 Downsells (Alternative Offers)</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      If customers decline the upsell, present a lower-priced alternative that still adds value.
                    </p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                      <span className="font-medium">Strategy:</span> If they decline the $197 upsell → Offer a $67 bonus module package
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
          <button
            onClick={() => toggleSection(4)}
            className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                4
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900">Revenue Optimization Psychology</h3>
              </div>
            </div>
            {expandedSections[4] ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          
          {expandedSections[4] && (
            <div className="px-6 pb-6 pt-0">
              <div className="ml-12">
                <p className="text-gray-600 mb-4">
                  When someone decides to buy your product, they're not just purchasing an item - they're investing in a solution to their problem.
                </p>
                <p className="text-gray-600 mb-6">
                  Understanding this mindset is key to helping them get even better results with complementary offers.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">🌸 They're Already Buying</h5>
                    <p className="text-sm text-gray-700">
                      When someone just bought something, they're in "buyer mode" and more open to related offers.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">⏰ Perfect Timing</h5>
                    <p className="text-sm text-gray-700">
                      Right after someone buys is the best time to offer them something else.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">🎯 They Want More Value</h5>
                    <p className="text-sm text-gray-700">
                      When customers get something good, they want more good stuff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Action Items:</h3>
            <button 
              onClick={() => setActionItems({ basics: true, orderBumps: true, upsells: true, revenue: true })}
              className="text-indigo-500 text-sm font-medium hover:text-indigo-600"
            >
              ✓ Complete All
            </button>
          </div>

          <div className="space-y-3">
            <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
              <input
                type="checkbox"
                checked={actionItems.basics}
                onChange={() => toggleActionItem('basics')}
                className="w-5 h-5 text-green-500 rounded mr-3"
              />
              <span className={actionItems.basics ? 'line-through text-gray-500' : 'text-gray-900'}>
                Read about Sales Funnel Basics
              </span>
            </label>

            <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
              <input
                type="checkbox"
                checked={actionItems.orderBumps}
                onChange={() => toggleActionItem('orderBumps')}
                className="w-5 h-5 text-green-500 rounded mr-3"
              />
              <span className={actionItems.orderBumps ? 'line-through text-gray-500' : 'text-gray-900'}>
                Understand Order Bumps
              </span>
            </label>

            <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
              <input
                type="checkbox"
                checked={actionItems.upsells}
                onChange={() => toggleActionItem('upsells')}
                className="w-5 h-5 text-green-500 rounded mr-3"
              />
              <span className={actionItems.upsells ? 'line-through text-gray-500' : 'text-gray-900'}>
                Learn about Upsells & Downsells
              </span>
            </label>

            <label className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors">
              <input
                type="checkbox"
                checked={actionItems.revenue}
                onChange={() => toggleActionItem('revenue')}
                className="w-5 h-5 text-green-500 rounded mr-3"
              />
              <span className={actionItems.revenue ? 'line-through text-gray-500' : 'text-gray-900'}>
                Grasp Revenue Optimization
              </span>
            </label>
          </div>

          <button
            className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
              allCompleted
                ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!allCompleted}
          >
            Complete Step
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}