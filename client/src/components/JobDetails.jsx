import React from 'react';

const JobDetails = ({ job }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-300">
            <h2 className="text-heading font-heading text-2xl mb-2" style={{ lineHeight: '1.5' }}>{job.title}</h2>
            <p className="text-body font-body text-sm mb-4">{job.description}</p>
            <div className="mb-4">
                <strong className="text-heading">Requirements:</strong>
                <ul className="list-disc pl-5">
                    {job.requirements.map((req, index) => (
                        <li key={index} className="text-body text-sm">{req}</li>
                    ))}
                </ul>
            </div>
            <div>
                <strong className="text-heading">Location:</strong>
                <p className="text-body text-sm">{job.location}</p>
            </div>
            <button className="bg-primaryButton text-white py-2 px-4 rounded" style={{ transition: '0.3s ease-in-out', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)' }}>
                Apply Now
            </button>
        </div>
    );
};

export default JobDetails;