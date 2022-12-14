import React, { useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import ServicesSection from '../ServicesSection/ServicesSection';

const Allservices = () => {
    // const services = useLoaderData();
    // console.log(services);
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://wild-photographer-server.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-4 my-10 justify-evenly'>

            {
                services.map(service => <ServicesSection key={service.id} service={service}></ServicesSection>)
            }
        </div>
    );
};

export default Allservices;