import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const updateReview = useLoaderData();
    console.log(updateReview);

    const naviate = useNavigate();
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        const newReview = { review };
        console.log(newReview);

        fetch(`https://wild-photographer-server.vercel.app/update/${updateReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then(res => res.json())
            .then(data => {
                naviate('/myreview');
            })
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='text-center my-5'>Update Review</h2>

            <form className="card flex mb-10" onSubmit={handleUpdateUser}>
                <div className="form-control">
                    <textarea name='review' defaultValue={updateReview.review} className="textarea textarea-primary" placeholder="Your Feedback"></textarea>
                </div>

                <div className="form-control mt-2">
                    <button className="btn btn-primary inline-block w-[13%]">Update reviews</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;