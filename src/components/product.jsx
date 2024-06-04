import React from 'react';

const Product = (props) => {
    return (
        <div className={"w-36 h-36 mr-6  shadow-xl flex flex-col items-center"+(props.isActive?"shadow-green-500":"")}>
            <img className="w-20 h-20" src={props.image} alt=""/>
            <span className="font-light text-lg">{props.title}</span>
        </div>
    );
};

export default Product;
