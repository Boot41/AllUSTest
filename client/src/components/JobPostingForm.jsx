import React, { useState } from 'react';

const JobPostingForm = (props) => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ jobTitle, jobDescription, jobLocation });
        resetForm();
    };

    const resetForm = () => {
        setJobTitle('');
        setJobDescription('');
        setJobLocation('');
    };

    return (
        <div className="flex flex-col items-center justify-center bg-primaryBackground p-medium rounded border border-borderColors shadow-md">
            <h2 className="text-heading font-heading text-24 mb-medium">Create Job Posting</h2>
            <form className="w-containerWidths[0] flex flex-col gap-medium" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="border border-borderColors p-small rounded focus:outline-none focus:ring focus:ring-primaryColor"
                    required
                />
                <textarea
                    placeholder="Job Description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="border border-borderColors p-small rounded focus:outline-none focus:ring focus:ring-primaryColor"
                    required
                />
                <input
                    type="text"
                    placeholder="Job Location"
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                    className="border border-borderColors p-small rounded focus:outline-none focus:ring focus:ring-primaryColor"
                    required
                />
                <button
                    type="submit"
                    className="bg-primaryButton text-white text-body font-body p-medium rounded mt-medium hover:bg-primaryColor transition duration-300"
                >
                    Submit Job Posting
                </button>
            </form>
        </div>
    );
};

export default JobPostingForm;