/**
 * The AttractionController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AttractionService');

const createAttraction = async (request, response) => {
    await Controller.handleRequest(request, response, service.createAttraction);
};

const deleteAttraction = async (request, response) => {
    await Controller.handleRequest(request, response, service.deleteAttraction);
};

const getAttraction = async (request, response) => {
    await Controller.handleRequest(request, response, service.getAttraction);
};

const getAttractions = async (request, response) => {
    await Controller.handleRequest(request, response, service.getAttractions);
};

const updateAttraction = async (request, response) => {
    await Controller.handleRequest(request, response, service.updateAttraction);
};

module.exports = {
    createAttraction,
    deleteAttraction,
    getAttraction,
    getAttractions,
    updateAttraction,
};
