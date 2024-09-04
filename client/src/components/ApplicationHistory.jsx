import React from 'react';

const ApplicationHistory = ({ applications }) => {
  return (
    <div className="max-w-[80%] mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-heading text-2xl font-heading mb-4">Application History</h2>
      <ul className="space-y-4">
        {applications.map((application, index) => (
          <li key={index} className="bg-secondaryBackground border border-borderColors rounded-md p-4">
            <h3 className="text-heading text-lg font-heading">{application.jobTitle}</h3>
            <p className="text-body text-sm mb-2">Company: {application.company}</p>
            <p className={`text-body text-sm mb-2 ${application.status === 'Pending' ? 'text-warningColor' : application.status === 'Accepted' ? 'text-successColor' : 'text-errorColor'}`}>
              Status: {application.status}
            </p>
            <p className="text-body text-sm">Applied on: {application.appliedDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationHistory;