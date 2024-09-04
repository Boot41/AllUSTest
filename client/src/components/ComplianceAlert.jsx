import React from 'react';

const ComplianceAlert = ({ message, onResolve }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-300 shadow-md rounded-lg">
            <div className="flex items-start">
                <span className="text-2xl text-green-500 mr-2">⚠️</span>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">Compliance Alert</h3>
                    <p className="text-base text-gray-600">{message}</p>
                </div>
            </div>
            <button 
                onClick={onResolve} 
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
                Resolve
            </button>
        </div>
    );
};

export default ComplianceAlert;