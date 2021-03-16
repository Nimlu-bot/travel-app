/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Create an Attraction-review
 * Creates a new instance of a `Attraction-review`.
 *
 * attractionReview AttractionReview A new `Attraction-review` to be created.
 * no response value expected for this operation
 * */
const createAttractionReview = ({ attractionReview }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attractionReview,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Delete the specific Attraction-review
 * Deletes an existing `Attraction-review`.
 *
 * attractionReviewId String A unique identifier for a `Attraction-review`.
 * no response value expected for this operation
 * */
const deleteAttractionReview = ({ attractionReviewId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attractionReviewId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Get the specific Attraction-review
 * Gets the details of a single instance of a `Attraction-review`.
 *
 * attractionReviewId String A unique identifier for a `Attraction-review`.
 * returns Attraction-review
 * */
const getAttractionReview = ({ attractionReviewId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attractionReviewId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * List All Attraction reviews
 * Gets a list of all `Attraction-review` entities.
 *
 * returns List
 * */
const getAttractionReviews = () =>
    new Promise((resolve, reject) => {
        try {
            resolve(Service.successResponse({}));
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Update the specific Attraction-review
 * Updates an existing `Attraction-review`.
 *
 * attractionReviewId String A unique identifier for a `Attraction-review`.
 * attractionReview AttractionReview Updated `Attraction-review` information.
 * no response value expected for this operation
 * */
const updateAttractionReview = ({ attractionReviewId, attractionReview }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attractionReviewId,
                    attractionReview,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });

module.exports = {
    createAttractionReview,
    deleteAttractionReview,
    getAttractionReview,
    getAttractionReviews,
    updateAttractionReview,
};
