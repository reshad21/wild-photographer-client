import React, { useEffect, useState } from 'react';

const ShowUserTable = () => {
    const [registerusers, setRegisterUser] = useState([]);
    useEffect(() => {
        fetch('https://wild-photographer-server.vercel.app/profile')
            .then(res => res.json())
            .then(data => setRegisterUser(data))
    }, [])

    const handleUserdelete = (user) => {
        // console.log("deleted successfully", id);
        fetch(`https://wild-photographer-server.vercel.app/userdlt/${user._id}`, {
            method: 'DELETE',
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .catch(error => console.error(error))

    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h3 className='font-bold text-center text-2xl my-12'>Total Register User: {registerusers.length}</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Contact info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registerusers.map(user => {
                                return (
                                    <tr key={user._id} user={user}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user?.name}</div>
                                                    <div className="text-sm opacity-50">{user?.address}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user?.email}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Phone: {user?.phone}</span>
                                        </td>
                                        <th className='flex gap-3'>
                                            <button className="btn btn-ghost btn-xs bg-lime-500">Update</button>
                                            <button onClick={() => handleUserdelete(user)} className="btn btn-ghost btn-xs bg-orange-500">Delete</button>
                                        </th>
                                    </tr>
                                )

                            })
                        }




                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ShowUserTable;