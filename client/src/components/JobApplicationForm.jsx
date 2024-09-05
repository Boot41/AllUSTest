import React, { useState } from 'react';

const JobApplicationForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, e.g., send to an API
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primaryBackground p-medium rounded-lg shadow-md"
    >
      <h2 className="text-heading text-2xl font-heading mb-medium">Job Application</h2>
      <div className="mb-medium">
        <label className="block text-heading font-body mb-small" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-borderColors p-small rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
          required
        />
      </div>
      <div className="mb-medium">
        <label className="block text-heading font-body mb-small" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-borderColors p-small rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
          required
        />
      </div>
      <div className="mb-medium">
        <label className="block text-heading font-body mb-small" htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border border-borderColors p-small rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
          required
        />
      </div>
      <div className="mb-medium">
        <label className="block text-heading font-body mb-small" htmlFor="resume">Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          className="border border-borderColors p-small rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primaryButton text-white py-medium px-large rounded-md shadow hover:bg-successColor transition-all ease-in-out duration-300"
      >
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;