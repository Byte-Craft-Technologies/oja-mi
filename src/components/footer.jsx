import React from 'react';
import Copyright from "./copyright";

const Footer = () => {
    return (
        <div className="bg-hero-green flex flex-col py-10">
            <div className="self-center">
                <img src="/white-logo.png" alt="Oja mi logo"/>
            </div>
            <di className="">
    <span className="text-white text-center font-bold font-poppins text-4xl">
        Disponible partout
    </span>
                <span
                    className="hidden lg:block lg:whitespace-nowrap text-white text-center font-normal text-xl mt-6 font-poppins"> Disponible sur les plateformes de téléchargement pour iPhone et Android. </span>
                <span
                    className="hidden lg:block lg:whitespace-nowrap text-white text-center font-normal text-xl mt-2 font-poppins">Pour télécharger l'application cliquez sur l'une des icones ci-dessous. </span>

            </di>
            <div className="flex mt-10 self-center mx-1">
                <a href="#"> <img src="/app-store.png" className="h-10 w-30 md:h-14 md:w-40 mr-4"
                                  alt="Download on the App Store"/></a>
                <a href="#"> <img src="/google-play.png" className="h-10 w-30 md:h-14 md:w-40"
                                  alt="Download on the App Store"/>
                </a>
            </div>
           <Copyright/>
        </div>
    );
};

export default Footer;
