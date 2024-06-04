import React from 'react';

const Presentation = () => {
    return (
        <div className="bg-white mt-20 md:mt-48 pb-20 px-4 lg:px-32">
        <div className="flex flex-col justify-around items-center">
            <span className="text-hero-gray font-semibold text-2xl md:text-4xl">
                Qui somme nous ?
            </span>
            <div className="mt-2 md:mt-5">
                <p className="mt-6 text-lg font-poppins leading-8">Bienvenue dans notre application mobile dédiée à la vente de produits alimentaires frais !
                    Plongez dans un monde où la fraîcheur et la qualité sont à portée de main, où chaque bouchée est une expérience gustative incomparable.
                 Que vous soyez un passionné de cuisine ou simplement à la recherche des meilleurs ingrédients pour vos repas quotidiens,
                notre application est votre compagnon idéal.</p>
            </div>
        </div>
            <div className="md:flex md:justify-between items-center md:mt-20">
                <div className="mt-2 flex flex-col items-center  pr-6">
                    <img src="/transport.png" className="mb-4 w-20 h-20 md:w-32 md:h-32" alt="transport"/>
                        <span className="font-bold text-xl text-nowrap">Livraison porte à porte</span>
                        <p className="mt-2 text-md font-light font-poppins leading-8">
                            Finis le casse-tête de la vente à distance. Ne vous déplacez plus,
                            un livreur vient jusqu'en bas de chez vous
                            pour récupérer ou vous livrer un produit.</p>
                </div>
                <div className="mt-2 flex flex-col items-center pr-6">
                    <img src="/security.png" className="mb-4 w-20 h-20 md:w-32 md:h-32" alt="Protection et securité"/>
                    <span className="font-bold text-xl text-nowrap">Protection & Sécurité</span>
                    <p className="mt-2 text-md font-light font-poppins leading-8">
                        Ojami assure la sécurité de vos paiements en ligne.
                        Remboursement garanti et retour offert
                        en cas de non-conformité de l'article !</p>
                </div>
                <div className="mt-2 flex flex-col items-center">
                    <img src="/variete.png" className="mb-4 w-20 h-20 md:w-32 md:h-32" alt="Veriete de produit"/>
                    <span className="font-bold text-xl text-nowrap">Variété des produits</span>
                    <p className="mt-2 text-md font-light font-poppins leading-8">
                        Découvrez notre sélection exceptionnelle
                        de produits frais et délicieux
                        pour une expérience culinaire inoubliable !</p>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
