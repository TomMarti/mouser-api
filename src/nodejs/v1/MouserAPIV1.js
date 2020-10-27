const MouserAPIV1Search = require("./MouserAPIV1Search");
const MouserAPIV1Order = require("./MouserAPIV1Order");
const MouserAPIV1Cart = require("./MouserAPIV1Cart");
const MouserAPIV1OrderHistory = require("./MouserAPIV1OrderHistory");

class MouserAPIV1 {
    constructor(apiKey) {
        this.version = "v1"
        this.url = "https://api.mouser.com/api/v1"
        this.search = new MouserAPIV1Search(apiKey, this.url)
        this.order = new MouserAPIV1Order(apiKey, this.url)
        this.orderHistory = new MouserAPIV1OrderHistory(apiKey, this.url)
        this.cart = new MouserAPIV1Cart(apiKey, this.url)
    }
}

module.exports = MouserAPIV1