import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobDetails from '../components/JobDetails';
import JobApplicationForm from '../components/JobApplicationForm';

const JobDetailsPage = () => {
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#F5F5F5', padding: '16px' }}>
            <Header />
            <div style={{ maxWidth: '800px', margin: 'auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5', marginBottom: '16px' }}>Job Details</h1>
                <JobDetails />
                <h2 style={{ color: '#212121', fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Apply Now</h2>
                <JobApplicationForm />
            </div>
            <Footer />
        </div>
    );
}

export default JobDetailsPage;