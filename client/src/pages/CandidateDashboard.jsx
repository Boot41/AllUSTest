import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSearchBar from '../components/JobSearchBar';
import JobResultsList from '../components/JobResultsList';

const CandidateDashboard = () => {
  return (
    <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#FFFFFF', padding: '24px' }}>
      <Header />
      <main style={{ maxWidth: '80%', margin: '0 auto', padding: '16px', backgroundColor: '#F5F5F5', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5', marginBottom: '16px' }}>Candidate Dashboard</h1>
        <p style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
          The CandidateDashboard page provides a holistic job search experience, incorporating essential components like the Header, Footer, JobSearchBar, and JobResultsList to present a cohesive interface for job seekers.
        </p>
        <JobSearchBar />
        <JobResultsList />
      </main>
      <Footer />
    </div>
  );
};

export default CandidateDashboard;