import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="flex justify-center mb-8">
        <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Testing_Platform_1732544491/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/d41f8fba9eb44d09b41d821412a2cd6c.jpeg`} alt="Hero" className="w-full max-w-4xl" />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Revolutionize Your Testing Process</h1>
          <p className="text-xl mb-6">Streamline, automate, and optimize your quality assurance with our cutting-edge testing platform</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }