import React from "react";

let Travel = ({ destination, country, photo, distance }) => (

<div>
    <p>{destination}</p>
    <p>{country}</p>
    <img src={photo}/>
    <p>{distance}</p>
</div>
);
export default Travel;

    







