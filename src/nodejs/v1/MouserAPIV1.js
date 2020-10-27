const MouserAPIV1Search = require("./MouserAPIV1Search");

class MouserAPIV1 {
    constructor(apiKey) {
        this.version = "v1"
        this.url = "https://api.mouser.com/api/v1"
        this.search = new MouserAPIV1Search(apiKey, this.url)
    }
}

module.exports = MouserAPIV1