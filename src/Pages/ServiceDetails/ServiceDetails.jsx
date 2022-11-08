import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext/AuthContext';

const ServiceDetails = () => {
    const { user } = useContext(userContext)
    // useloader it will be not work because another data need
    const singleService = useLoaderData();
    console.log("this is service page", typeof singleService);

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="card bg-base-100 shadow-xl my-14">
                <figure>
                    <PhotoProvider>
                        <PhotoView src="https://placeimg.com/400/225/arch">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-full object-cover h-[500px]' />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Animal photography</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora aspernatur quo. Quae soluta nihil, pariatur doloremque dolorum tempore esse autem voluptas officiis laborum? Quos consequuntur voluptatum quidem voluptates accusamus?</p>
                    <div className="card-actions flex justify-between items-center pt-4">
                        <span className='font-bold'>Price: 00000000$</span>
                        <span>Rating: 4.5</span>
                    </div>
                </div>
            </div>

            <div className="bg-base-100 shadow-xl mb-5 flex gap-10 px-7 py-5 rounded-lg">
                <img src="https://placeimg.com/200/280/arch" className='rounded-full h-20 w-[7rem] object-cover' alt="Movie" />
                <div className="">
                    <h2 className='text-sm'>Written by</h2>
                    <h2 className="card-title">Rashed Uzzaman Reshad!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe omnis odio fugit deserunt ut dolorum sunt ducimus. Consectetur voluptas nemo officiis odit iste quisquam nostrum ex magni non, alias expedita.</p>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col  w-[100%]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Your Feedback!</h1>
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-full">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea className="textarea textarea-primary" placeholder="Your Feedback"></textarea>
                            </div>

                            <div className="form-control">
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
                                <label className="label">
                                    {
                                        user ? "" : <Link to="/login" className="label-text-alt link link-hover">Please login to add a review</Link>
                                    }

                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add reviews</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;