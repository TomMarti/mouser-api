const MouserAPI = require("../MouserAPI");


let mapi = new MouserAPI("5ef3064d-6dda-4e7b-96c3-dc3e033cf1f0", 1)

mapi.search.partByKeyword("resistor", result => {
    console.log(result)
})