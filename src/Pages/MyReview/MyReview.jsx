import React from 'react';

const MyReview = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="bg-base-100 shadow-xl mb-5 flex justify-between items-center gap-4 px-7 py-5 rounded-lg">
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
            </div>
        </div>
    );
};

export default MyReview;