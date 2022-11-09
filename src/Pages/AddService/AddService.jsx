import React from 'react';

const AddService = () => {
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const balance = form.balance.value;

        const serviceInfo = {
            name,
            image,
            details,
            rating,
            balance
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceInfo),
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

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">ADD NEW SERVICE</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleAddService} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name='image' placeholder="Service image url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Service Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Description</span>
                                </label>
                                <textarea name='details' className="textarea textarea-primary" placeholder="Tell Something About Your Service"></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <input type="number" name='balance' placeholder="Service Price" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Rating</span>
                                </label>
                                <input type="number" name='rating' placeholder="Service Rating" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">ADD NEW SERVICE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;