const MouserAPIV1 = require("./v1/MouserAPIV1");

class MouserAPI {
    constructor(apiKey, version) {
        if (version === 1) {
            return new MouserAPIV1(apiKey)
        }
        return new MouserAPIV1(apiKey)
    }
}

module.exports = MouserAPI