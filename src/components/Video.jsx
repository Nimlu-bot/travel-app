import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
    return (
        <div className='video-wrapper'>
            <iframe
                width='100%'
                height='315'
                src={props.video}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                title='GreatBritain'
                allowFullScreen={true}
            ></iframe>
        </div>
    );
}

Video.propTypes = {
    video: PropTypes.string,
};

export default Video;
