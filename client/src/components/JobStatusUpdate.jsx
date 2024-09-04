import React, { useState } from 'react';

const JobStatusUpdate = ({ updateJobStatus }) => {
  const [status, setStatus] = useState('active'); // Default status

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    updateJobStatus(event.target.value); // Notify parent of status change
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-md" style={{ fontFamily: '"Roboto", sans-serif' }}>
      <h2 className="text-2xl font-bold text-heading mb-4">Update Job Status</h2>
      <p className="text-body mb-6">Manage job statuses efficiently to maintain compliance.</p>
      
      <select
        value={status}
        onChange={handleStatusChange}
        className="border border-borderColors rounded-md p-2 mb-4 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-green-500"
        style={{ lineHeight: '1.6', fontSize: '14px' }}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="pending">Pending</option>
      </select>
      
      <button
        onClick={() => updateJobStatus(status)}
        className="w-full bg-primaryButton hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
      >
        Update Status
      </button>
    </div>
  );
};

export default JobStatusUpdate;