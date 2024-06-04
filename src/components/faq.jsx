import React from 'react';
import DropDown from "./dropDown";

const FAQ = () => {

    return (
        <div className={`bg-white my-20`}>
    <div className="flex flex-col">
        <span className='text-2xl md:text-4xl  font-semibold font-poppins text-hero-gray'>Foire Aux Questions</span>
        <span className='text-center text-hero-green mt-3 font-semibold text-2xl'>FAQ</span>
    </div>
            <div className="mt-14 ">
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 mx-16 gap-6">
                    <DropDown  title="Quelles sont les méthodes de paiement acceptées ?"/>
                    <DropDown title="Mes informations privées sont-elles protégées ?"/>
                    <DropDown title="Quels sont les délais de livraison ?"/> <DropDown title="Que faire en cas de réception d'un produit défectueux ?"/>

                </div>
                <div className="mt-4 grid grid-cols-2 mx-16 gap-6">
                </div>
            </div>
        </div>
    );
};

export default FAQ;
