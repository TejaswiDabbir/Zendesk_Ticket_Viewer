require('dotenv').config();
const axios = require('axios');
const HELPER = require("../BL/helper");
module.exports = class API {

    static async fetchAllTickets(req,res) {
        const auth_id = process.env.AUTH_ID;
        const auth_secret = process.env.AUTH_TOKEN;
        let url = "https://zcctejuchallenge.zendesk.com/api/v2/tickets";
        let tickets = [];
        let data = {};
        axios({
            method: 'get',
            url: url,
            auth: {
                username: auth_id,
                password: auth_secret
            }
        })
        .then(function(response) {
            data = response.data;
            res.status(200).json(data);
        })
        .catch(function (error) {
            console.log('caught Error');
            debugger;
            let error_data = {};
            let status = 500;
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              error_data = {
                  "type": "SERVER ERROR",
                  "data": error.response.data,
                  "status": error.response.status
              };
              status = error.response.status;
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
              error_data = {
                  "type": "REQUEST ERROR",
                  "data": error.request
              };
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
              error_data = {
                  "type": "UNHANDLED ERROR",
                  "data": error.message
              };
            }
            res.status(status).json(error_data);
        });
    }

    static async fetchTicketsByPage(req,res){
        const auth_id = process.env.AUTH_ID;
        const auth_secret = process.env.AUTH_TOKEN;
        const pageNumber = req.params.pageNumber
        let url = "https://zcctejuchallenge.zendesk.com/api/v2/tickets?page="+pageNumber;

        axios({
            method: 'get',
            url: url,
            auth: {
                username: auth_id,
                password: auth_secret
            }
        })
        .then(function(response) {
            let data = response.data;
            res.status(200).json(data);
        })
        .catch(function (error) {
            console.log('caught Error');
            let error_data = {};
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              error_data = {
                  "type": "SERVER ERROR",
                  "data": error.response.data,
                  "status": error.response.status
              };
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
              error_data = {
                  "type": "REQUEST ERROR",
                  "data": error.request
              };
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
              error_data = {
                  "type": "UNHANDLED ERROR",
                  "data": error.message
              };
            }
            res.status(error.response.status).json(error_data);
        });
    }
};