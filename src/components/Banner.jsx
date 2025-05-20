import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[80vh] bg-cover bg-center rounded" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <div className="grid grid-cols-2 absolute inset-0  bg-opacity-60 place-items-center text-white px-20">
        <div className='col-span-1'>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Easiest Way to Handle Your Freelance Task</h1>
          <p className="mb-6 max-w-xl mx-auto">
            Work with talented people at the most affordable price to get the most out of your time and cost
          </p>
          <div className="flex gap-2">
            <input type="text" placeholder="Search for..." className="p-2 rounded w-64 border-white " /> 
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
          </div>
        </div>
        <div className='col-span-1'>
        </div>
      </div>
    </div>
  );
};

export default Banner;