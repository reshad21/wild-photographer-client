import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../../src/assets/images/1.jpg';
import img2 from '../../../src/assets/images/2.jpg';
import img3 from '../../../src/assets/images/3.jpg';
import img4 from '../../../src/assets/images/4.jpg';
import ServicesSection from '../ServicesSection/ServicesSection';
const Home = () => {
    const services = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-4 my-10 justify-evenly bg-slate-400 p-3'>

                {
                    services.map(service => <ServicesSection key={service.id} services={services}></ServicesSection>)
                }

            </div>

            <div className="see-more-section text-center my-5">
                <Link to='/services'>
                    <button className="btn btn-primary btn-sm">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;