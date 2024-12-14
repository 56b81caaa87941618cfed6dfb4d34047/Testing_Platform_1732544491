import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 w-full h-full relative">
      <div className="flex justify-center mb-4">
        <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Testing_Platform_1732544491/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/02dfdbde981d4596aa48a513a93b1716.jpeg`} alt="Circle" className="rounded-full w-24 h-24" />
      </div>
      <h1 className="text-2xl font-bold text-center">Welcome</h1>
    </header>
  );
};

export { Header as component };