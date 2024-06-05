import React from 'react';

const Hero = () => {
    return (
            <div className="bg-gray-200 mb-4 w-full bg-cover py-2 relative">
                <div className="md:flex bg-hero bg-contain  md:justify-between">
                    <div className=" ml-10">
                        <div className="mt-10  flex flex-col justify-between">
                            <div className=" flex flex-col font-inter justify-around text-hero-green font-extrabold  text-3xl lg:text-5xl">
                                <span className="py-4 mx-auto">Sélection gourmande,</span>
                                <span className="py-4 mx-auto">livraison rapide,</span>
                                <span className="py-4 mx-auto">votre festin à portée de clic!</span>
                            </div>
                            <div className="flex flex-col mt-10 text-gray-700 font-poppins text-xl">
                                <span className="py-2">Téléchargez-la sur l'Apple Store ou Google Play</span>
                                <span className="py-2"> pour une expérience révolutionnaire.</span>
                            </div>
                            <div className="flex mt-10">
                                <a href="#"> <img src="/app-store.png" className="h-14 w-40 mr-4"
                                                  alt="Download on the App Store"/></a>
                                <a href="#"> <img src="/google-play.png" className="h-14 w-40"
                                                  alt="Download on the App Store"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:mr-10 ml-10 mt-10 flex flex-col ">
                        <div className="">
                            <img src="/phone.png"/>
                        </div>
                        <span className="self-center mt-2 text-hero-gray font-bold">Suivez nous sur </span>
                        <div className="flex self-center">
                            <a href="#" className="mr-2">
                                <img src="/twitter.png" alt="Tweeter"/>
                            </a>
                            <a href="#" className="mr-2">
                                <img src="/facebook.png" alt="Facebook"/>
                            </a>
                            <a href="#">
                                <img src="/google.png" alt="Google"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" absolute text-gray-700 bg-white w-[460px] lg:w-[633px] h-[104px]  shadow-2xl shadow-gray-500 bottom-[-50px] left-8 lg:left-[10%] rounded-b-sm hidden
                md:flex md:justify-around ">
                    <div className="flex items-center justify-between">
                        <img src="/time-eat.png" className="w-[50px] h-[50px]" alt="time eat icon"/>
                        <span className="font-poppins font-light ml-4 mt-2">Livraison rapide</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <img src="/delivery.png" className="w-[50px] h-[50px]" alt="delivery icon"/>
                       <div className="flex flex-col">
                           <span className="font-poppins font-light ml-4 mt-2">Livraison gratuite à </span>
                           <span className="font-poppins font-light ml-4 mt-2">partir de 29  euros</span>
                       </div>
                    </div>
                </div>
            </div>
    );
};

export default Hero;
