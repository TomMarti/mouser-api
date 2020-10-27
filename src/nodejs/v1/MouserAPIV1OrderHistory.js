const axios = require("axios")

class MouserAPIV1OrderHistory {
    constructor(apiKey, url) {
        this.apiKey = apiKey
        this.url = url
    }

    getByDate (date) {
        console.log("GET: /orderhistory/BaDateFilter")
    }

    getByDateRange (startDate, endDate) {
        console.log("GET: /orderhistory/BaDateRange")
    }
}

module.exports = MouserAPIV1OrderHistory