import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSearchBar from '../components/JobSearchBar';
import ApplicationHistory from '../components/ApplicationHistory';

const CandidateDashboard = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif', padding: '24px' }}>
            <Header />
            <div style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5' }}>Candidate Dashboard</h1>
                <JobSearchBar />
                <ApplicationHistory />
            </div>
            <Footer />
        </div>
    );
};

export default CandidateDashboard;