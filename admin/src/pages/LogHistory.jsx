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
            <tr className='text-center'>
              <th className="py-2 px-4 border-b border-r">S.No</th>
              <th className="py-2 px-4 border-b border-r">IP Address</th>
              <th className="py-2 px-4 border-b border-r">Login Time</th>
              <th className="py-2 px-4 border-b border-r">Browser</th>
              <th className="py-2 px-4 border-b border-r">Browser Version</th>
              <th className="py-2 px-4 border-b border-r">Device</th>
              <th className="py-2 px-4 border-b border-r">OS</th>
              <th className="py-2 px-4 border-b border-r">OS Version</th>
              <th className="py-2 px-4 border-b border-r">Platform</th>
              <th className="py-2 px-4 border-b border-r">Message</th>
              <th className="py-2 px-4 border-b border-r">Successful</th>
            </tr>
          </thead>
          <tbody>
            {logHistory.map((log, index) => (
              <tr key={index} className='hover:bg-gray-300  text-center'>
                <td className="py-2 px-4 border-b border-r">{index + 1}</td>
                <td className="py-2 px-4 border-b border-r">{log.ipAddress}</td>
                <td className="py-2 px-4 border-b border-r">{new Date(log.loginTime).toLocaleString()}</td>
                <td className="py-2 px-4 border-b border-r">{log.deviceInfo.browser}</td>
                <td className="py-2 px-4 border-b border-r">{log.deviceInfo.browserVersion}</td>
                <td className="py-2 px-4 border-b border-r">{log.deviceInfo.device}</td>
                <td className="py-2 px-4 border-b border-r">{log.deviceInfo.os}</td>
                <td className="py-2 px-4 border-b border-r">{log.deviceInfo.osVersion}</td>
                <td className="py-2 px-4 border-b border-r">{log.deviceInfo.platform}</td>
                <td className="py-2 px-4 border-b border-r">{log.message}</td>
                <td className="py-2 px-4 border-b border-r">{log.successful ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LogHistory