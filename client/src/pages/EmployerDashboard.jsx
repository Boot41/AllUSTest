import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';
import ApplicationNotifications from '../components/ApplicationNotifications';

const EmployerDashboard = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif' }}>
            <Header />
            <main className="container mx-auto px-4" style={{ maxWidth: '80%' }}>
                <h1 className="text-heading" style={{ fontSize: '24px', color: '#212121', margin: '24px 0' }}>
                    Employer Dashboard
                </h1>
                <ApplicationNotifications />
                <JobPostingForm />
                <JobListingManager />
            </main>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;