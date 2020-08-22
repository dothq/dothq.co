const makeId = require("uuid/v4");
const makeIdv5 = require("uuid/v5");

const makeIdFromString = (payload) => {
    const ns = "1c49162a-e70c-54e3-94ef-8614282ba446"

    const bytes = [...Buffer.from(payload.toString())]

    return makeIdv5(bytes, ns)
}

exports.makeId = makeId;
exports.makeIdFromString = makeIdFromString;