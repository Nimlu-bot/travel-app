/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Create a Country
 * Creates a new instance of a `Country`.
 *
 * country Country A new `Country` to be created.
 * no response value expected for this operation
 * */
const createCountry = ({ country }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    country,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Delete the Country
 * Deletes an existing `Country`.
 *
 * countryId String A unique identifier for a `Country`.
 * no response value expected for this operation
 * */
const deleteCountry = ({ countryId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    countryId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * List All Countries
 * Gets a list of all `Country` entities.
 *
 * returns List
 * */
const getCountries = () =>
    new Promise((resolve, reject) => {
        try {
            resolve(Service.successResponse({}));
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Get the Country
 * Gets the details of a single instance of a `Country`.
 *
 * countryId String A unique identifier for a `Country`.
 * returns Country
 * */
const getCountry = ({ countryId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    countryId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Update the Country
 * Updates an existing `Country`.
 *
 * countryId String A unique identifier for a `Country`.
 * country Country Updated `Country` information.
 * no response value expected for this operation
 * */
const updateCountry = ({ countryId, country }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    countryId,
                    country,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });

module.exports = {
    createCountry,
    deleteCountry,
    getCountries,
    getCountry,
    updateCountry,
};
