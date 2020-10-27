const axios = require("axios")

class MouserAPIV1Search{
    constructor(apiKey, url) {
        this.apiKey = apiKey
        this.url = url
    }

    partByKeyword (keyword, callback) {
        console.log("keyword")
    }

    partByKeywordAndManufacturer (keyword, manufacturer) {
        console.log("Keyword Manufacturer")
    }

    partByPartnumber (partnumber) {
        console.log("Partnumber")
    }

    partByPartnumberAndManufacturer (partnumber, manufacturer) {
        console.log("Partnumber manufacturer")
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