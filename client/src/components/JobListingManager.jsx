import React from 'react';

const JobListingManager = ({ jobListings, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto p-6" style={{ backgroundColor: '#F5F5F5' }}>
      <h1 className="text-heading font-heading text-24" style={{ color: '#212121', fontFamily: '"Roboto", sans-serif' }}>
        Job Listings
      </h1>
      <div className="overflow-x-auto mt-4 rounded-lg shadow-md" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <table className="min-w-full">
          <thead>
            <tr className="bg-primaryColor text-white">
              <th className="p-4 text-left">Job Title</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map((job) => (
              <tr key={job.id} className="border-b" style={{ borderColor: '#E0E0E0' }}>
                <td className="p-4 text-body" style={{ color: '#757575' }}>{job.title}</td>
                <td className="p-4 text-body" style={{ color: '#757575' }}>{job.company}</td>
                <td className="p-4">
                  <button 
                    onClick={() => onEdit(job.id)} 
                    className="bg-secondaryButton text-white py-2 px-4 rounded" 
                    style={{ backgroundColor: '#FFC107', transition: '0.3s ease-in-out' }}>
                    Edit
                  </button>
                  <button 
                    onClick={() => onDelete(job.id)} 
                    className="ml-2 bg-errorColor text-white py-2 px-4 rounded" 
                    style={{ backgroundColor: '#F44336', transition: '0.3s ease-in-out' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobListingManager;