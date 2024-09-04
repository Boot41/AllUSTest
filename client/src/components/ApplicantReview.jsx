import React from 'react';

const ApplicantReview = ({ applicants, onStatusChange, onNoteAdd }) => {
  return (
    <div className="p-6 bg-backgroundColors-primaryBackground">
      <h1 className="text-colors-heading font-heading text-24px mb-4">Applicant Review</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search applicants..."
          className="border border-borderColors rounded border-radius-4px p-2 w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="bg-cards-and-modals-cardStyles-background border border-borderColors shadow-cards-and-modals-cardStyles-shadow rounded border-radius-4px p-4">
            <h2 className="text-colors-heading font-heading text-20px mb-2">{applicant.name}</h2>
            <p className="text-colors-body font-body text-body mb-2">Status: {applicant.status}</p>
            <button 
              onClick={() => onStatusChange(applicant.id)} 
              className="bg-buttonColors-primaryButton text-white py-2 px-4 rounded border-radius-4px hover:bg-buttonColors-primaryButton-dark transition transition-timing">
              Update Status
            </button>
            <div className="mt-4">
              <textarea
                onChange={(e) => onNoteAdd(applicant.id, e.target.value)}
                placeholder="Add a note..."
                className="border border-borderColors rounded border-radius-4px p-2 w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantReview;