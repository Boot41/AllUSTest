import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobDetails from '../components/JobDetails';

const JobDetailsPage = () => {
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#F5F5F5', padding: '16px' }}>
            <Header />
            <main style={{ maxWidth: '80%', margin: 'auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
                <JobDetails />
            </main>
            <Footer />
        </div>
    );
};

export default JobDetailsPage;