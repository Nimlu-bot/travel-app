import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
    return (
        <div className='video-wrapper'>
            <iframe
                width='300'
                height='150'
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
