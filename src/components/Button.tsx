import React from 'react';

const Button: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => {
  return (
    <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-sm transition-all focus:outline-none active:bg-blue-800 disabled:bg-gray-400 m-1'>
      {text}
    </button>
  );
};

export default Button;