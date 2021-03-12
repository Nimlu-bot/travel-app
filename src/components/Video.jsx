import React from 'react';

export default function Video() {
    return (
        <div className='video-wrapper'>
            <iframe
                width='300'
                height='150'
                src='https://www.youtube.com/embed/Uy9sXRk7its'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                title='GreatBritain'
                allowFullScreen={true}
            ></iframe>
        </div>
    );
}
