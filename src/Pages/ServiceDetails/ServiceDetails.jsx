import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    // useloader it will be not work because another data need
    const singleService = useLoaderData();
    console.log("this is service page", typeof singleService);

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="card bg-base-100 shadow-xl my-14">
                <figure>
                    <PhotoProvider>
                        <PhotoView src="https://placeimg.com/400/225/arch">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className='w-full object-cover h-[500px]' />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Animal photography</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora aspernatur quo. Quae soluta nihil, pariatur doloremque dolorum tempore esse autem voluptas officiis laborum? Quos consequuntur voluptatum quidem voluptates accusamus?</p>
                    <div className="card-actions flex justify-between items-center pt-4">
                        <span className='font-bold'>Price: 00000000$</span>
                        <span>Rating: 4.5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;