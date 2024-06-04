import React from 'react';
import Feedback from "./feedback";

const feedbacks = [
    {
        "author":{
            "firstname":"Wilson",
            "lastname":"Bergson",
            "image":"/customer1.png"
        },
        "comment":"Au top pour le shopping en ligne ! Mon application shopping préférée en Tunisie! Toujours des nouveautés à des prix ambattables et service au top :)"
    },
    {
        "author":{
            "firstname":"Sophie",
            "lastname":"Aminoff",
            "image":"/customer2.png"
        },
        "comment":"Top et super facile !!! Application super simple d’utilisation ! Le service client au top ! Les livreurs super arrangeants ! On y trouve de tout !"
    },    {
        "author":{
            "firstname":"Ryan",
            "lastname":"Press",
            "image":"/customer3.png"
        },
        "comment":"Très pratique Très bonne application facile et sécurisée"  }
];
const Feedbacks = () => {
    return (
        <div className=" bg-fruits-gray bg-fruits  w-full bg-cover py-20 px-1  md:grid md:grid-cols-2 lg:grid-cols-3">
            {
                feedbacks.map((feedback, index)=>
               <Feedback key={index} feedback={feedback}/>)
            }
        </div>
    );
};

export default Feedbacks;
