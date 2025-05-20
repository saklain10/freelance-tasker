import React from 'react';
import Banner from "../components/Banner";
import FeaturedTasks from '../components/FeaturedTasks';

const Home = () => {
  return (
    <div className="pt-21"> 
      <Banner />
      
            <div className="bg-white py-4">
              {/* dark:bg-gray-900 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-md transition">
            <img src="/img2.png" alt="Icon" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Reliable Dealings</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Your trusted platform for job-based task outsourcing.</p>
          </div>
          
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-md transition">
            <img src="/img1.png" alt="Icon" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Data Secured</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Your data is encrypted and protected 24/7.</p>
          </div>
          
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-md transition">
            <img src="/img3.png" alt="Icon" className="mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Live Chat Support</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Get real-time help whenever you need it.</p>
          </div>
        </div>
      </div>
      
      <FeaturedTasks />
    </div>
  );
};

export default Home;
