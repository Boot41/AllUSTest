import React from 'react';

const JobPostSuccessNotification = ({ jobTitle, onViewListing }) => {
  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg border border-gray-300 rounded-md p-6 transition-transform transform-gpu animate-fadeIn" style={{ width: '300px', zIndex: 50 }}>
      <h2 className="text-[#212121] font-bold text-[24px] leading-[1.5] mb-2">Success!</h2>
      <p className="text-[#757575] text-[14px] leading-[1.6] mb-4">
        Your job posting for <strong>{jobTitle}</strong> has been successfully submitted!
      </p>
      <button 
        onClick={onViewListing} 
        className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white font-semibold py-[12px] rounded-[4px] transition duration-[0.3s] ease-in-out"
        style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)' }}
      >
        View Listing
      </button>
    </div>
  );
};

export default JobPostSuccessNotification;