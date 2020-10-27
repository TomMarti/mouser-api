const axios = require("axios")

class MouserAPIV1Order {
    constructor(apiKey, url) {
        this.apiKey = apiKey
        this.url = url
    }
}

module.exports = MouserAPIV1Order