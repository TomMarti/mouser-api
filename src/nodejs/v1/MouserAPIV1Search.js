const axios = require("axios")

class MouserAPIV1Search{
    constructor(apiKey, url) {
        this.apiKey = apiKey
        this.url = url
    }

    partByKeyword (keyword, callback) {
        console.log("POST: /search/keyword")
    }

    partByKeywordAndManufacturer (keyword, manufacturer) {
        console.log("POST: /search/keywordandmanufacturer")
    }

    partByPartnumber (partnumber) {
        console.log("POST: /search/partnumber")
    }

    partByPartnumberAndManufacturer (partnumber, manufacturer) {
        console.log("POST: /search/partnumberandmanufacturer")
    }

    manufacturer (callback) {
        axios.get(
            this.url + "/search/manufacturerlist?apiKey=" + this.apiKey
        ).then(result => {
            callback(result.data)
        }).then(error => {
            callback(error)
        })
    }
}

module.exports = MouserAPIV1Search