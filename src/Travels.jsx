import React from "react";
import Travel from './Travel';

const travels = [
    {
    destination:"Hong-Kong",
    country: "China",
    photo: "http://scd.rfi.fr/sites/filesrfi/dynimagecache/113/0/599/337/1024/578/sites/images.rfi.fr/files/aef_image/hong-kong-864884_960_720_0.jpg",
    distance:'9713 km',
    },
    {
    destination:"Bali",
    country: "Indonesia",
    photo: 'https://www.kuoni.fr/wp-content/uploads/2018/02/U2FTZwtoVW9TeQEhBmtXZg9sUzYBe1Nh-906x577.jpg',
    distance:'12.242 km',
    },
    {
    destination:"New-York",
    country: "United States of America",
    photo: 'https://gopened.com/wp-content/uploads/2018/02/street-view-new-york-gopened.jpg',
    distance:'6301 km',
    },
];

const Travels = () => (
    <div>
        {travels.map(travel => {
        return <Travel destination={travel.destination} country={travel.country} photo={travel.photo}  distance={travel.distance}/>
        })}
    
    </div>
    
);

export default Travels;
