import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext/AuthContext';

const MyReview = () => {
    const { user } = useContext(userContext);
    console.log(user);
    const [myreviews, setMyreview] = useState([]);

    useEffect(() => {
        fetch(`https://wild-photographer-server.vercel.app/emailuserreview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreview(data))
    }, [user?.email])

    const [displayReview, setDisplayReview] = useState(myreviews);

    const handleReviewDelete = (myreview) => {
        console.log("clickekd", myreview);
        fetch(`https://wild-photographer-server.vercel.app/userreview/${myreview._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('user deleted successfully');
                    const remainingUsers = displayReview.filter(usr => usr._id !== user._id);
                    setDisplayReview(remainingUsers);
                }
            })
    }


    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1>My total review:{myreviews.length}</h1>
            <h1>My total Display review:{displayReview.length}</h1>

            {
                myreviews.map(myreview => {
                    return (
                        <div key={myreview._id} className="bg-base-100 shadow-xl mb-5 flex justify-between items-center gap-4 px-7 py-5 rounded-lg">
                            <div className='flex-auto w-[10%]'>
                                <img src={myreview?.photoURL} className='rounded-full h-[7rem] w-[7rem] object-cover' alt="Movie" />
                            </div>

                            <div className="flex-auto w-[60%]">
                                <h2 className='text-sm'>Written by</h2>
                                <h2 className="card-title">{myreview?.displayName}</h2>
                                <p>{myreview?.review}</p>
                            </div>

                            <div className='flex-auto w-[25%] justify-end'>
                                <Link to={`/update/${myreview._id}`}>
                                    <button className="btn btn-warning btn-sm mr-3">UPDATE</button>
                                </Link>
                                <button onClick={() => handleReviewDelete(myreview)} className="btn btn-error btn-sm">DELETE</button>
                            </div>
                        </div>
                    )
                })
            }

            {/* <div className="bg-base-100 shadow-xl mb-5 flex justify-between items-center gap-4 px-7 py-5 rounded-lg">
                <div className='flex-auto w-[10%]'>
                    <img src="https://placeimg.com/200/280/arch" className='rounded-full h-[7rem] w-[7rem] object-cover' alt="Movie" />
                </div>

                <div className="flex-auto w-[60%]">
                    <h2 className='text-sm'>Written by</h2>
                    <h2 className="card-title">Rashed Uzzaman Reshad!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis odio fugit deserunt ut dolorum sunt ducimus. Consectetur voluptas nemo officiis odit iste quisquam nostrum ex magni non, alias expedita.</p>
                </div>

                <div className='flex-auto w-[25%] justify-end'>
                    <button className="btn btn-warning btn-sm mr-3">UPDATE</button>
                    <button className="btn btn-error btn-sm">DELETE</button>
                </div>
            </div> */}
        </div>
    );
};

export default MyReview;