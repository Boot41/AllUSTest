import React from 'react'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import JobDetails from '../components/JobDetails'; 
import ApplicantReview from '../components/ApplicantReview'; 

const JobDetailsPage = () => { 
    return ( 
        <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif' }}> 
            <Header /> 
            <div style={{ maxWidth: '80%', margin: '0 auto', padding: '24px' }}> 
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5', marginBottom: '24px' }}> 
                    Job Details 
                </h1> 
                <JobDetails /> 
                <div style={{ margin: '16px 0', borderTop: '1px solid #E0E0E0', paddingTop: '16px' }}> 
                    <h2 style={{ color: '#212121', fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}> 
                        Applicant Reviews 
                    </h2> 
                    <ApplicantReview /> 
                </div> 
            </div> 
            <Footer /> 
        </div> 
    ); 
}; 

export default JobDetailsPage;