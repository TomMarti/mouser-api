const axios = require("axios")

class MouserAPIV1Cart {
    constructor(apiKey, url) {
        this.apiKey = apiKey
        this.url = url
    }

    get (cartKey, country=null, currency=null) {
        console.log("GET: /cart")
    }

    update (cartKey, items, country=null, currency=null) {
        console.log("POST: /cart")
    }

    items = {
        insert (cartKey, items, country=null, currency=null) {
            console.log("POST: /cart/items/insert")
        },
        update (cartKey, partnumber, country=null, currency=null) {
            console.log("POST: /cart/items/update")
        }
    }

    item = {
        remove () {
            console.log("POST: /cart/item/remove")
        }
    }

    schedule = {
        insert (cartKey, items, time) {
            console.log("POST: /cart/insert/schedule")
        },
        update (cartKey, items, time) {
            console.log("POST: /cart/update/schedule")
        }
    }

    schedules = {
        delete (cartKey) {
            console.log("POST: /cart/deleteall/schedule")
        }
    }

    create (orderNumber, country=null, currency=null) {
        console.log("POST: /order/item/CreateCartFromOrder")
    }
}

module.exports = MouserAPIV1Cart