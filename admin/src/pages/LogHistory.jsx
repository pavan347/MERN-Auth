import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const LogHistory = () => {

  const {logHistory, selectedUser} = useContext(AppContext);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-4"><span className='text-blue-700'>Log</span> History</h1>
        <div className="flex">
          <p className='mb-2'>Showing log history of user: <span className='font-bold text-xl'>{(selectedUser) ? selectedUser.username : null}</span></p>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">S.No</th>
              <th className="py-2 px-4 border-b">IP Address</th>
              <th className="py-2 px-4 border-b">Login Time</th>
              <th className="py-2 px-4 border-b">Browser</th>
              <th className="py-2 px-4 border-b">Browser Version</th>
              <th className="py-2 px-4 border-b">Device</th>
              <th className="py-2 px-4 border-b">OS</th>
              <th className="py-2 px-4 border-b">OS Version</th>
              <th className="py-2 px-4 border-b">Platform</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Successful</th>
            </tr>
          </thead>
          <tbody>
            {logHistory.map((log, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{log.ipAddress}</td>
                <td className="py-2 px-4 border-b">{new Date(log.loginTime).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{log.deviceInfo.browser}</td>
                <td className="py-2 px-4 border-b">{log.deviceInfo.browserVersion}</td>
                <td className="py-2 px-4 border-b">{log.deviceInfo.device}</td>
                <td className="py-2 px-4 border-b">{log.deviceInfo.os}</td>
                <td className="py-2 px-4 border-b">{log.deviceInfo.osVersion}</td>
                <td className="py-2 px-4 border-b">{log.deviceInfo.platform}</td>
                <td className="py-2 px-4 border-b">{log.message}</td>
                <td className="py-2 px-4 border-b">{log.successful ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LogHistory