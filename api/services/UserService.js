/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * Create a User
 * Creates a new instance of a `Users`.
 *
 * user User A new `Users` to be created.
 * no response value expected for this operation
 * */
const createUser = ({ user }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    user,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Delete the User
 * Deletes an existing `Users`.
 *
 * usersId String A unique identifier for a `Users`.
 * no response value expected for this operation
 * */
const deleteUser = ({ usersId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    usersId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Get the User
 * Gets the details of a single instance of a `Users`.
 *
 * usersId String A unique identifier for a `Users`.
 * returns User
 * */
const getUser = ({ usersId }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    usersId,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * List All Users
 * Gets a list of all `Users` entities.
 *
 * returns List
 * */
const getUsers = () =>
    new Promise((resolve, reject) => {
        try {
            resolve(Service.successResponse({}));
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });
/**
 * Update the User
 * Updates an existing `Users`.
 *
 * usersId String A unique identifier for a `Users`.
 * user User Updated `Users` information.
 * no response value expected for this operation
 * */
const updateUser = ({ usersId, user }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    usersId,
                    user,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });

module.exports = {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
};
