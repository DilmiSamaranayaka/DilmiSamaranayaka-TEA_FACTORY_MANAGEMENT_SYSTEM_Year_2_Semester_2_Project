import React, { useState } from 'react';

import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteMaintenance = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteMaintenance = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/maintenances/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/MaintenanceHome');
      })
      .catch((error) => {
        setLoading(false);
        alert('There was an error. Please check the console.');
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen' style={{ backgroundColor: 'white' }}>
      <div className='p-4'>
        
        <h1 className='text-3xl my-4'>Delete Maintenance</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 shadow-lg'>
          <h3 className='text-2xl'>Are you sure you want to delete this maintenance?</h3>
          <button
            onClick={handleDeleteMaintenance}
            className='bg-red-500 text-white p-2 mt-4 rounded-md hover:bg-red-600 transition-all'
          >
            Delete It
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMaintenance;