import React from 'react';

const ApplicationNotifications = ({ notifications }) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Application Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification, index) => (
            <li key={index} className="flex items-start p-4 border-b border-gray-200">
              <div className="flex-1">
                <p className="text-lg text-gray-800">{notification.title}</p>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
              <button className="ml-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplicationNotifications;