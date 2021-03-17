/**
 * The AttractionReviewController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AttractionReviewService');

const createAttractionReview = async (request, response) => {
    await Controller.handleRequest(request, response, service.createAttractionReview);
};

const deleteAttractionReview = async (request, response) => {
    await Controller.handleRequest(request, response, service.deleteAttractionReview);
};

const getAttractionReview = async (request, response) => {
    await Controller.handleRequest(request, response, service.getAttractionReview);
};

const getAttractionReviews = async (request, response) => {
    await Controller.handleRequest(request, response, service.getAttractionReviews);
};

const updateAttractionReview = async (request, response) => {
    await Controller.handleRequest(request, response, service.updateAttractionReview);
};

module.exports = {
    createAttractionReview,
    deleteAttractionReview,
    getAttractionReview,
    getAttractionReviews,
    updateAttractionReview,
};
