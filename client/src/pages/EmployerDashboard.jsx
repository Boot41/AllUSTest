import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#F5F5F5', padding: '24px' }}>
            <Header />
            <main style={{ maxWidth: '80%', margin: 'auto', backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5' }}>Employer Dashboard</h1>
                <p style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6' }}>
                    The EmployerDashboard page serves as a comprehensive hub for employers, integrating the Header, Footer, JobPostingForm, 
                    and JobListingManager components to enable a complete job management experience.
                </p>
                <JobPostingForm />
                <JobListingManager />
            </main>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;