import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const ServicesSection = ({ service }) => {
    console.log(service);
    // const { name, image, details, balance } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={service?.image}>
                        <img src={service?.image} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service?.name}</h2>
                <p>{service?.details?.length > 100 ? service?.details?.slice(0, 200) : service?.details} ....</p>
                <div className="card-actions flex justify-between items-center pt-4">
                    <span className='font-bold'>Price: {service?.balance}$</span>
                    <Link to={`/services/${service?._id}`}>
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;