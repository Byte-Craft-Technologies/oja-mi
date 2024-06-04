import React, {useState} from 'react';
import Product from "./product";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

const products = [
    {
        "name": "Biftecks",
        "image": "/beefteck.png"
    },
    {
        "name": "Viande hachée",
        "image": "/viande-hache.png"
    },
    {
        "name": "Poulet cru",
        "image": "/poulet-cru.png"
    },
    {
        "name": "Daurade",
        "image": "/daurade.png"
    },
    {
        "name": "Crevettes",
        "image": "/crevettes.png"
    },
    {
        "name": "Fromages",
        "image": "/fromage.png"
    },
    {
        "name": "Tomate",
        "image": "/tomate.png"
    },

    {
        "name": "Escargot",
        "image": "/escargot.png"
    }
];

const OurProducts = () => {
    const t = getShownImageIndexes()
    const [currentIndexes, setCurrentIndexes] = useState(t);
    const prevSlide = () => {
        const isFirstSlide = currentIndexes[0] === 0;
        let newIndexes = currentIndexes.slice();
        newIndexes.pop();
        isFirstSlide ? newIndexes.unshift(products.length - 1) : newIndexes.unshift(newIndexes[0] - 1)
        setCurrentIndexes(newIndexes)
    }
    const nextSlide = () => {
        const islastSlide = currentIndexes[currentIndexes.length - 1] === products.length - 1;
        let newIndexes = currentIndexes.slice();
        newIndexes.shift()
        islastSlide ? newIndexes.push(0) : newIndexes.push(newIndexes[newIndexes.length - 1] + 1);
        setCurrentIndexes(newIndexes)
    }
    return (
        <div className="py-10 px-10 flex flex-col ">
            <span className="self-start mt-10 font-semibold text-2xl md:text-4xl font-inter">
            Nos produits
            </span>
            <div className="flex mt-20 self-center py-10 px-3 relative ">
                {currentIndexes.map(i => <Product key={i} title={products[i].name} image={products[i].image}/>)}
                {/* Left Arrow */}
                <div
                    className=" absolute top-[40%] translate-x-0 left-[-20px] shadow shadow-gray-500 text-xl rounded-full p-2 bg-white text-gray-500 cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                {/* Left Arrow */}
                <div
                    className="absolute top-[40%] translate-x-0  right-0 shadow shadow-gray-500 text-2xl rounded-full p-2 bg-white text-gray-500 cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
            </div>
        </div>
    );
};
function getShownImageIndexes() {
    const  width = window.innerWidth;
   if (width<768){
       return [0,1];
   }else if(width<1024){
       return [0,1,2,3]
   }else{
       return [0, 1, 2, 3, 4, 5, 6]
   }
}
export default OurProducts;
