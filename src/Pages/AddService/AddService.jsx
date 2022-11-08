import React from 'react';

const AddService = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">ADD NEW SERVICE</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="Service image url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" placeholder="Service Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Description</span>
                                </label>
                                <textarea className="textarea textarea-primary" placeholder="Tell Something About Your Service"></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <input type="number" placeholder="Service Price" className="input input-bordered" />
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