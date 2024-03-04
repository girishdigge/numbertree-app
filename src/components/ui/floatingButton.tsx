import React from 'react';

const FloatingButton = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className='fixed z-50 bottom-8 right-4 bg-num-orange hover:bg-num-indigo text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none'
    >
      connect
      {children}
    </button>
  );
};

export default FloatingButton;
