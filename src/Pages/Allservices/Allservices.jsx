import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import ServicesSection from '../ServicesSection/ServicesSection';

const Allservices = () => {
    const services = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-4 my-10 justify-evenly'>
            {/* {

                services?.map(service => {
                    return (
                        <div className="card w-96 bg-base-100 shadow-xl" key={service.id} service={service}>
                            <figure>
                                <PhotoProvider>
                                    <PhotoView src={service.image}>
                                        <img src={service.image} alt="Shoes" />
                                    </PhotoView>
                                </PhotoProvider>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.details?.length > 100 ? service.details.slice(0, 200) : service.details} ....</p>
                                <div className="card-actions flex justify-between items-center pt-4">
                                    <span className='font-bold'>Price: {service.balance}$</span>
                                    <Link to={`/services/${service?.id}`}>
                                        <button className="btn btn-primary btn-sm">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })

            } */}
            {
                services.map(service => <ServicesSection key={service.id} service={service}></ServicesSection>)
            }
        </div>
    );
};

export default Allservices;