import React, { useState } from 'react';

const JobSearchBar = ({ onSearch }) => {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSearch = () => {
    onSearch({ keywords, location, jobType });
  };

  return (
    <div className="flex flex-col p-medium bg-primaryBackground shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-[4px]">
      <input
        type="text"
        placeholder="Search for jobs..."
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="p-small border border-[#E0E0E0] rounded-[4px] mb-medium"
        style={{ fontFamily: '"Roboto", sans-serif', fontSize: '14px', lineHeight: '1.6' }}
      />
      <div className="flex space-x-4 mb-medium">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-[#E0E0E0] rounded-[4px] p-small"
        >
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Remote">Remote</option>
        </select>
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="border border-[#E0E0E0] rounded-[4px] p-small"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="bg-primaryButton text-white py-medium px-large rounded-[4px] transition duration-300 ease-in-out hover:bg-[#388E3C]"
      >
        Search
      </button>
    </div>
  );
};

export default JobSearchBar;