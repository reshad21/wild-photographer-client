import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext/AuthContext';

const ServiceDetails = () => {
    // const postedTime = moment().format("Do MMM YYYY h:mm:ss a");
    const postedTime = new Date();

    const singleService = useLoaderData();
    const { user } = useContext(userContext);
    // const { uid, photoURL, displayName, email } = user;

    const navigate = useNavigate();
    const handleUserReview = (e) => {
        e.preventDefault();

        // if user is not login to the site
        if (!user) {
            navigate('/login');
            return;
        }
        const form = e.target;
        const review = form.review.value;

        const userreview = {
            uid: user?.uid,
            email: user?.email,
            review,
            photoURL: user?.photoURL,
            postedTime,
            displayName: user?.displayName,
        }
        // console.log(userreview);
        fetch('https://wild-photographer-server.vercel.app/userreview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userreview),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                form.reset();
                // if (Success.acknowledged) {

                // }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://wild-photographer-server.vercel.app/userreview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])



    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="card bg-base-100 shadow-xl my-14">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={singleService?.image}>
                            <img src={singleService?.image} alt="Shoes" className='w-full object-cover h-[500px]' />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{singleService?.name}</h2>
                    <p>{singleService?.details}</p>
                    <div className="card-actions flex justify-between items-center pt-4">
                        <span className='font-bold'>Price: {singleService?.balance}$</span>
                        <span>Rating: {singleService?.rating}</span>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col  w-[100%]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Your Feedback!</h1>
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-full">

                        <form className="card-body" onSubmit={handleUserReview}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>

                                <textarea name='review' className="textarea textarea-primary" placeholder="Your Feedback"></textarea>

                                <label className="label">
                                    {/* {
                                        user ? "" : <button onClick={handleGiveReview} className="label-text-alt link link-hover">Please login to add a review</button>
                                    } */}

                                    {/* <button onClick={handleGiveReview} className="label-text-alt link link-hover">Please login to add a review</button> */}

                                    {
                                        !user && <Link to='/login'>
                                            <button className="label-text-alt link link-hover">Please login to add a review</button>
                                        </Link>
                                    }

                                </label>
                            </div>

                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image url" className="input input-bordered" />
                            </div> */}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add reviews</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <p>TOTAL REVIEW : {reviews.length}</p>
            {
                reviews.map(review => {
                    return (
                        <div key={review._id} className="bg-base-100 shadow-xl mb-5 flex gap-10 px-7 py-5 rounded-lg">
                            <img src={review?.photoURL ? review?.photoURL : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgX-TMnMpzB1BPKuPzMoSBfYMljIE_hhU-A&usqp=CAU`} className='rounded-full h-20 w-[7rem] object-cover' alt="Movie" />
                            <div className="">
                                <h2 className='text-sm'>Written by</h2>
                                <h4 className='text-sm'>Posted On: {review?.postedTime}</h4>
                                <h2 className="card-title">{review?.displayName ? review?.displayName : "User"}</h2>
                                <p>{review?.review}</p>
                            </div>
                        </div>
                    )
                })
            }

            {/* <div className="bg-base-100 shadow-xl mb-5 flex gap-10 px-7 py-5 rounded-lg">
                <img src="https://placeimg.com/200/280/arch" className='rounded-full h-20 w-[7rem] object-cover' alt="Movie" />
                <div className="relative">
                    <h2 className='text-sm'>Written by</h2>
                    <h2 className="card-title">Rashed Uzzaman Reshad!</h2>
                    <h4 className='text-sm absolute top-0 right-0'>Posted On: {postedTime}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis odio fugit deserunt ut dolorum sunt ducimus. Consectetur voluptas nemo officiis odit iste quisquam nostrum ex magni non, alias expedita.</p>
                </div>
            </div> */}


        </div>
    );
};

export default ServiceDetails;