import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminJobOverview from '../components/AdminJobOverview';
import JobStatusUpdate from '../components/JobStatusUpdate';
import ComplianceAlert from '../components/ComplianceAlert';

const AdminDashboard = () => {
  return (
    <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#F5F5F5', padding: '16px' }}>
      <Header />
      <main style={{ maxWidth: '80%', margin: 'auto', padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#212121', lineHeight: '1.5' }}>Admin Dashboard</h1>
        <ComplianceAlert />
        <AdminJobOverview />
        <JobStatusUpdate />
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;