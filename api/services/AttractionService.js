/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Create a Attraction
 * Creates a new instance of a `Attraction`.
 *
 * attraction Attraction A new `Attraction` to be created.
 * no response value expected for this operation
 * */
const createAttraction = ({ attraction }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attraction,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Delete a Attraction
 * Deletes an existing `Attraction`.
 *
 * attractionId String A unique identifier for a `Attraction`.
 * no response value expected for this operation
 * */
const deleteAttraction = ({ attractionId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attractionId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Get a Attraction
 * Gets the details of a single instance of a `Attraction`.
 *
 * attractionId String A unique identifier for a `Attraction`.
 * returns Attraction
 * */
const getAttraction = ({ attractionId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attractionId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * List All Attractions
 * Gets a list of all `Attraction` entities.
 *
 * returns List
 * */
const getAttractions = () =>
    new Promise((resolve, reject) => {
        try {
            resolve(Service.successResponse({}));
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Update a Attraction
 * Updates an existing `Attraction`.
 *
 * attractionId String A unique identifier for a `Attraction`.
 * attraction Attraction Updated `Attraction` information.
 * no response value expected for this operation
 * */
const updateAttraction = ({ attractionId, attraction }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    attractionId,
                    attraction,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });

module.exports = {
    createAttraction,
    deleteAttraction,
    getAttraction,
    getAttractions,
    updateAttraction,
};
