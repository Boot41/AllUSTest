import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSearchBar from '../components/JobSearchBar';
import JobResultsList from '../components/JobResultsList';

const JobSearchResultsPage = () => {
    return (
        <div style={{ backgroundColor: '#FFFFFF', fontFamily: '"Roboto", sans-serif' }}>
            <Header />
            <div style={{ padding: '24px', maxWidth: '80%', margin: '0 auto' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5' }}>
                    Job Search Results
                </h1>
                <JobSearchBar />
                <div style={{ marginTop: '16px' }}>
                    <JobResultsList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default JobSearchResultsPage;