import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {

    const navigate = useNavigate();

  const {users, selectedUser, setSelectedUser} = useContext(AppContext);

  const handleOnClick = (user) => {
    setSelectedUser(user);
    navigate('/log-history');
  }

return (
    <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold"><span className='text-blue-700'>All</span> Users</h1>
        <p className='text-sm text-center mb-4'>Click on the username to see the log history of the user</p>
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr className='text-center'>
                    <th className='py-2 px-4 border-b border-r'>S.No</th>
                    <th className="py-2 px-4 border-b border-r">Name</th>
                    <th className="py-2 px-4 border-b border-r">Email</th>
                    <th className="py-2 px-4 border-b border-r">Account Verified</th>
                    <th className="py-2 px-4 border-b border-r">Total Failed Login Attempts</th>
                    <th className="py-2 px-4 border-b border-r">Account Locked Until</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id}  className="hover:bg-gray-300 text-center">
                        <td className="py-2 px-4 border-b border-r">{users.indexOf(user) + 1}</td>
                        <td onClick={()=>handleOnClick(user)} className="py-2 px-4 border-b border-r cursor-pointer">{user.username}</td>
                        <td className="py-2 px-4 border-b border-r">{user.email}</td>
                        <td className="py-2 px-4 border-b border-r">{user.isAccountVerified ? 'Yes' : 'No'}</td>
                        <td className="py-2 px-4 border-b border-r">{user.totalFailedLoginAttempts}</td>
                        <td className="py-2 px-4 border-b border-r">{user.accountLockedUntil ? new Date(user.accountLockedUntil).toLocaleString() : 'N/A'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}

export default AllUsers