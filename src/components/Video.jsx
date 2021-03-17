import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

function Video(props) {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({});

    let movement_timer = null;
    const RESET_TIMEOUT = 100;
    const test_dimensions = () => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight,
            });
        }
    };
    useLayoutEffect(() => {
        test_dimensions();
    }, []);

    window.addEventListener('resize', () => {
        clearInterval(movement_timer);
        movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT);
    });
    return (
        <div className='video-wrapper' ref={targetRef}>
            <iframe
                width={dimensions.width}
                height={((dimensions.width / 16) * 9).toString()}
                src={props.video}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                title='Video'
                hl='en'
                persist_hl='1'
                allowFullScreen={true}
            ></iframe>
        </div>
    );
}

Video.propTypes = {
    video: PropTypes.string,
};

export default Video;
