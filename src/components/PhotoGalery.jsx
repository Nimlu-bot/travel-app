import React from 'react';
import ImageGallery from 'react-image-gallery';
import * as img from './GBImages';

const PREFIX = 'GB';
const PU = '../assets/img/GB-';

const getimages = function getStaticImages() {
    let images = [];
    for (let i = 1; i < 7; i++) {
        images.push({
            //original: img[`${PREFIX}${i}`],
            original: `${PU}${i}.jpg`,
            thumbnail: img[`${PREFIX}${i}t`],
        });
    }

    return images;
};

const sliderImages = getimages();
console.log(sliderImages);
// const images = [
//     {
//         original: img.GB1,
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//         originalTitle: 'gjfdhkgjdfh fsdjkshkj h',
//         description: 'fjhskjdghkfjghjk',
//     },
//     {
//         original: img.GB2,
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: img.GB3,
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//         original: img.GB4,
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//         original: img.GB5,
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//     {
//         original: img.GB6,
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
// ];

export default function PhotoGallery() {
    return (
        <div className='photo-wrapper'>
            <ImageGallery items={sliderImages} />
        </div>
    );
}
