import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowLeft, Check } from 'lucide-react';

export default function FunnelLaunchTrack() {
  const [expandedSections, setExpandedSections] = useState({
    1: true,
    2: false,
    3: false,
    4: false
  });
  
  const [actionItems, setActionItems] = useState({
    basics: true,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Funnel/Bay Launch Track</h1>
          <button className="text-gray-600 hover:text-gray-900">Reset</button>
        </div>

        {/* Progress Steps */}
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

        {/* Step 1: What is a Sales Funnel */}
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

        {/* Section 1: What is a Sales Funnel */}
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
                A sales funnel is a strategic sequence of pages and offers designed to guide potential customers through a journey from initial interest to purchase and beyond. Think of it as a systematic approach to converting visitors into buyers while maximizing the value of each customer.
              </p>
              <div className="ml-12 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">🎯 Key Goal:</span> Transform cold traffic into paying customers through a series of optimized touchpoints.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Order Bumps */}
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
                {/* Product Example */}
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

                  {/* Order Bump Offer */}
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

                {/* Summary */}
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
                  An order bump is a small, complementary offer presented on your checkout page. It's typically a simple checkbox that customers can select to add an additional product or service to their order before completing the purchase.
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
                      Well-executed order bumps can increase average order value by 20-50% with conversion rates of 15-25%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 3: One-Click Upsells & Downsells */}
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
                {/* Upsell Page Preview */}
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="bg-white rounded shadow-lg p-6 max-w-md mx-auto">
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Wait (Customer_first_name)! Here's an exclusive offer to complement your order!</h4>
                      <p className="text-sm text-gray-600">Add this to your order with just ONE click. No need to re-enter your card details!</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start mb-4">
                        <img src="/api/placeholder/100/100" alt="Upsell Product" className="w-24 h-24 object-cover rounded mr-4" />
                        <div>
                          <h5 className="font-bold text-gray-900">Minimalist skin care Routine</h5>
                          <p className="text-2xl font-bold text-gray-900 mt-2">$135.00</p>
                        </div>
                      </div>
                      <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 mb-2">
                        Yes! Add to my Order
                      </button>
                      <button className="w-full text-gray-600 text-sm hover:text-gray-900">
                        No thanks, I don't want this exclusive offer
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">📈 Upsells (Higher Value Offers)</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      After a customer purchases, present them with a higher-value, premium version or complementary product. Since they've already committed to buying, they're in a "buying mindset."
                    </p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                      <span className="font-medium">Example:</span> Customer buys a $47 course → Offered a $197 advanced course + coaching package
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">💡 Downsells (Alternative Offers)</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      If customers decline the upsell, present a lower-priced alternative that still adds value. This gives hesitant buyers another opportunity to purchase.
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

        {/* Section 4: Revenue Optimization Psychology */}
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
                  When someone decides to buy your product, they're not just purchasing an item - they're investing in a solution to their problem, and feel confident about their decision.
                </p>
                <p className="text-gray-600 mb-6">
                  Understanding this mindset is key to helping them get even better results with complementary offers. Here's why additional offers work so well:
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
                      Right after someone buys is the best time to offer them something else they're likely to need and want to get better results.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">🎯 They Want More Value</h5>
                    <p className="text-sm text-gray-700">
                      When customers get something good, they want more good stuff. If it enhances their purchase, they just bought.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Items */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Action Items:</h3>
            <button className="text-indigo-500 text-sm font-medium hover:text-indigo-600">
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