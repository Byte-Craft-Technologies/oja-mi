import React, {useState} from 'react';

const Feedback = ({feedback}) => {
    return (
        <div  className="w-[350px] h-[283px] mt-4  mx-auto px-14 py-6 md:ml-2 bg-white">
            <div>
                <p className="text-center h-32">{feedback.comment}</p>
                <div className="mt-2 flex ">
                    <img src={feedback.author.image} className="rounded-full w-16 h-16"/>
                    <p className=" mt-5 ml-4">
                        {feedback.author.firstname} {feedback.author.lastname}</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
