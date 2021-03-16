/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
 * User Login
 * Return JWT token
 *
 * userCredentials UserCredentials User credentials
 * no response value expected for this operation
 * */
const userLogin = ({ userCredentials }) =>
    new Promise((resolve, reject) => {
        try {
            resolve(
                Service.successResponse({
                    userCredentials,
                }),
            );
        } catch (e) {
            reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
        }
    });

module.exports = {
    userLogin,
};
