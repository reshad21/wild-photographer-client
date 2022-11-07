import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServicesSection = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-4 my-10 justify-evenly bg-slate-400 p-3'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src="https://placeimg.com/400/225/arch">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Lion photography</h2>
                    <p>The lion (Panthera leo) is a large cat of the genus Panther native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane....</p>
                    <div className="card-actions flex justify-between items-center pt-4">
                        <span className='font-bold'>Price: 100$</span>
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src="https://placeimg.com/400/225/arch">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Lion photography</h2>
                    <p>The lion (Panthera leo) is a large cat of the genus Panther native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane....</p>
                    <div className="card-actions flex justify-between items-center pt-4">
                        <span className='font-bold'>Price: 100$</span>
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src="https://placeimg.com/400/225/arch">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Lion photography</h2>
                    <p>The lion (Panthera leo) is a large cat of the genus Panther native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane....</p>
                    <div className="card-actions flex justify-between items-center pt-4">
                        <span className='font-bold'>Price: 100$</span>
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesSection;