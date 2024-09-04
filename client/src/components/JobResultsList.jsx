import React from 'react';

const JobResultsList = ({ jobListings }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-heading font-heading text-2xl mb-4">Job Listings</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobListings.map((job) => (
                    <div key={job.id} className="border border-borderColors rounded-md p-4 bg-secondaryBackground hover:shadow-lg transition-all duration-300">
                        <h3 className="text-heading font-heading text-xl mb-2">{job.title}</h3>
                        <div className="flex items-center mb-2">
                            <img src={job.logo} alt={`${job.company} logo`} className="h-8 w-8 mr-2" />
                            <span className="text-body font-body">{job.company}</span>
                        </div>
                        <p className="text-body font-body mb-2">{job.description}</p>
                        <div className="flex items-center text-links">
                            <span className="mr-2">{job.location}</span>
                        </div>
                        <button className="mt-4 bg-primaryButton text-white font-body py-2 px-4 rounded hover:bg-successColor transition-all duration-300">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobResultsList;