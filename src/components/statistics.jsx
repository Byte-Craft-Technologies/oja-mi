import React from 'react';

const Statistics = () => {
    return (
        <div className="mx-20 md:mx-60 lg:flex  my-10">
            <div className="flex flex-col w-60 h-44 items-center text-center mr-48 ">
                <span className="text-5xl font-semibold font-poppins text-hero-gray">50M+</span>
                <span className="text-xl font-light font-poppins mt-2">Utilisateur</span>
            </div>
            <div className="flex flex-col w-60 h-44 items-center text-center mr-48">
                <span className="text-5xl font-semibold font-poppins text-hero-gray">$100M</span>
                <span className="text-xl font-light font-poppins mt-2">Articles vendu</span>
            </div>
            <div className="flex flex-col w-60 h-44 items-center text-center mr-48">
                <span className="text-5xl font-semibold font-poppins text-hero-gray">600+</span>
                <span className="text-xl font-light font-poppins mt-2 whitespace-nowrap">clients satisfaits</span>
            </div>
        </div>
    );
};

export default Statistics;
