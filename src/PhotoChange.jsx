import React, { useState } from 'react';
import './PhotoChange.css';

export default function PhotoChange() {
    const image_links = [
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://media.istockphoto.com/id/1316669417/photo/capital-city-of-azerbaijan-baku.webp?b=1&s=170667a&w=0&k=20&c=AjaQ-C2vNxNIGJ0V_291VIcC3ZJcJtJEBw9BeMOIdzw=",
        "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
        "https://media.istockphoto.com/id/1311737764/photo/flame-towers-in-baku-at-dusk.jpg?s=612x612&w=0&k=20&c=51oR-jtlwO3V0PtVlPWooF902S0Ol5SVhAiscgvAev8=",
        "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function toggleImages() {
        setCurrentImageIndex((currentImageIndex + 1) % image_links.length);
    }

    return (
            <div className="photoChange" onClick={toggleImages}>
                <img width="500px" height="350px" src={image_links[currentImageIndex]} alt={`image_photo_${currentImageIndex}`} />
            </div>
        
    );
}
