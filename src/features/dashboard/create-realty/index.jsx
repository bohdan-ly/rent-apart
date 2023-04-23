import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRealty = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/edit/realty')}
      className="flex items-center justify-center rounded bg-gray-50 min-h-[150px] cursor-pointer hover:border"
    >
      <p className="text-2xl text-gray-400">+</p>
    </div>
  );
};

export default CreateRealty;
