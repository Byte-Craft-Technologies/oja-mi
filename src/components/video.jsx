import React from 'react';

const Video = () => {
    return (
        <div className="bg-vegetable bg-video w-full bg-cover px-10 py-10">
            <div className="flex flex-col relative justify-between items-center">
                <span className="font-semibold text-4xl text-hero-gray">Comment ça marche ?</span>
                <img className="mt-6" src="/phone.png" alt="Phone"/>
                <a href="#" className="absolute top-1/2">
                    <img src="/play.png" alt="Play video"/>
                </a>
            </div>
        </div>
    );
};

export default Video;
