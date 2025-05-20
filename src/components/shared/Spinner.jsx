import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <span className="loading loading-spinner text-primary text-4xl"></span>
      <span className="loading loading-spinner text-primary text-4xl"></span>
      <span className="loading loading-spinner text-primary text-4xl"></span>
    </div>
  );
};

export default Spinner;
