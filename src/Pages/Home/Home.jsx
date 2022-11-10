import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../src/assets/images/1.jpg';
import img11 from '../../../src/assets/images/11.jpg';
import img2 from '../../../src/assets/images/2.jpg';
import img3 from '../../../src/assets/images/3.jpg';
import img4 from '../../../src/assets/images/4.jpg';
import ServicesSection from '../ServicesSection/ServicesSection';
const Home = () => {
    // const services = useLoaderData();
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://wild-photographer-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full object-cover" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full object-cover" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full object-cover" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full object-cover" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <div className="my-work my-8 px-8">
                <h2 className='text-orange-600 font-bold text-center text-lg'>Portfolio</h2>
                <h2 className='font-bold text-center text-lg'>My Amazing Work</h2>
                <p className='text-center'>Most common methods for a photographer that take good pixel perfect photo and show his creativity</p>
            </div>

            <div className='mx-auto grid lg:grid-cols-3 gap-4 my-10 justify-evenly p-3'>

                {
                    services.map(service => <ServicesSection key={service.id} service={service}></ServicesSection>)
                }

            </div>

            <div className="see-more-section text-center my-5">
                <Link to='/allservices'>
                    <button className="btn btn-primary btn-sm">See all</button>
                </Link>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row px-10">
                    <img src={img11} alt="" className='w-[700px] h-[500px] object-cover' />
                    <div>
                        <h1 className="text-5xl font-bold">About MY Photography!</h1>
                        <p className="py-6">Hi my name is Rashed Uzzaman Reshad. I work with phonography since 6 years. I visit lot of place and take amazing photo to amazing this world. I love to take photo of wild animal. Different type of animal in this world i just try to show some of them in this site. Visit my site and enjoy my photography</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;