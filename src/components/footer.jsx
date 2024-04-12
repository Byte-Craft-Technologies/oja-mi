import React from 'react';

const Footer = () => {
    return (
        <div className="bg-hero-green flex flex-col py-10">
            <div className="self-center">
                <img src="/white-logo.png" alt="Oja mi logo"/>
            </div>
<div className="flex flex-col">
    <span className="text-white text-center font-bold font-poppins text-5xl">
        Disponible partout
    </span>
    <span className="whitespace-nowrap text-white text-center font-normal text-xl mt-6 font-poppins"> Disponible sur les plateformes de téléchargement pour iPhone et Android. </span>
    <span className="whitespace-nowrap text-white text-center font-normal text-xl mt-2 font-poppins">Pour télécharger l'application cliquez sur l'une des icones ci-dessous. </span>

</div>
            <div className="flex mt-10 self-center ">
                <a href="#"> <img src="/app-store.png" className="h-16 w-58 mr-4"
                                  alt="Download on the App Store"/></a>
                <a href="#"> <img src="/google-play.png" className="h-16 w-54"
                                  alt="Download on the App Store"/>
                </a>
            </div>
        </div>
    );
};

export default Footer;
