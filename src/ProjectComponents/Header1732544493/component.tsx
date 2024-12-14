import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 w-full h-full relative"> {/* Full width and height */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Testing_Platform_1732544491/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/4623e2b8cb6e4831bc499b6d5e3dfb9a.jpeg`} alt="Circle" className="w-8 h-8" />
      </div>
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold">TestPro</div>
      </div>
    </header>
  );
};

export { Header as component };