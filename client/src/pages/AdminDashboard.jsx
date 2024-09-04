import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminJobOverview from '../components/AdminJobOverview';
import JobStatusUpdate from '../components/JobStatusUpdate';
import ComplianceAlert from '../components/ComplianceAlert';

const AdminDashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#FFFFFF] font-[Roboto]">
            <Header />
            <main className="flex-grow p-[16px] bg-[#F5F5F5]">
                <h1 className="text-[#212121] text-[24px] font-[700] leading-[1.5] mb-[24px]">Admin Dashboard</h1>
                <AdminJobOverview />
                <JobStatusUpdate />
                <ComplianceAlert />
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;