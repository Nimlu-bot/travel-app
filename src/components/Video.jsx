import React from 'react';

export default function Video() {
    return (
        <div className='video-wrapper'>
            <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/Uy9sXRk7its'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                title='GreatBritain'
                allowfullscreen='true'
            ></iframe>
        </div>
    );
}
