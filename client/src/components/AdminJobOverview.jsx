import React from 'react';

const AdminJobOverview = ({ jobPostings, onFilterChange }) => {
    return (
        <div className="bg-secondaryBackground p-medium" style={{ fontFamily: '"Roboto", sans-serif' }}>
            <h1 className="text-heading text-2xl font-heading mb-large">Job Postings Overview</h1>
            <div className="mb-medium">
                <input
                    type="text"
                    placeholder="Search by employer or status"
                    onChange={onFilterChange}
                    className="border border-borderColors p-small rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    style={{ height: '40px' }}
                />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {jobPostings.map((job) => (
                    <div
                        key={job.id}
                        className="bg-cardStyles shadow-cardStyles border border-borderColors rounded border-radius transition-shadow duration-300 hover:shadow-lg"
                        style={{
                            padding: '16px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h2 className="text-heading text-lg font-heading">{job.title}</h2>
                        <p className="text-body text-sm">{job.employer}</p>
                        <p className="text-body text-xs">{job.postingDate}</p>
                        <button
                            className="bg-primaryButton text-white px-medium py-small rounded-md mt-medium hover:bg-primaryColor-700 transition-all duration-300"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminJobOverview;