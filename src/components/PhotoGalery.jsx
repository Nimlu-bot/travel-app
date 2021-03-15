import React from 'react';
import ImageGallery from 'react-image-gallery';
import { sortAttr } from './attractionImages';
import PropTypes from 'prop-types';

function PhotoGallery(props) {
    const country = sortAttr(props.countryShort);
    const lang = props.lang;
    const images = [
        {
            original: country[0].thumbnail.url,
            thumbnail: country[0].thumbnail.url,
            description: country[0].summary[lang],
        },
        {
            original: country[1].thumbnail.url,
            thumbnail: country[1].thumbnail.url,
            description: country[1].summary[lang],
        },
        {
            original: country[2].thumbnail.url,
            thumbnail: country[2].thumbnail.url,
            description: country[2].summary[lang],
        },
        {
            original: country[3].thumbnail.url,
            thumbnail: country[3].thumbnail.url,
            description: country[3].summary[lang],
        },
        {
            original: country[4].thumbnail.url,
            thumbnail: country[4].thumbnail.url,
            description: country[4].summary[lang],
        },
        {
            original: country[5].thumbnail.url,
            thumbnail: country[5].thumbnail.url,
            description: country[5].summary[lang],
        },
    ];
    return (
        <div className='photo-wrapper'>
            <ImageGallery items={images} thumbnailPosition='left' />
        </div>
    );
}

PhotoGallery.propTypes = {
    lang: PropTypes.string,
    countryShort: PropTypes.string,
};

export default PhotoGallery;
