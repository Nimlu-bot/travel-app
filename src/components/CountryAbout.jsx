import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryAbout() {
    const { id } = useParams();

    return (
        <div className='country-about-wrapper'>
            <div className='country-photo-wrapper'></div>
            <div className='country-about'>
                <p className='country-name'>Name {id}</p>
                <p className='country-capital-name'>Capital</p>
                <p className='country-about-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veritatis voluptatum nihil harum
                    accusantium beatae voluptates reprehenderit atque eaque quia tempore distinctio accusamus, hic,
                    obcaecati ad. Quis labore ipsam maxime!
                </p>
            </div>
        </div>
    );
}
