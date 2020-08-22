const axios = require("axios")

const FormData = require('form-data')

const { makeIdFromString } = require("../../uuid")

const { STATUS_URI, STATUS_API_KEY } = require("../../../credentials.json");

const statuses = {
    0: 'Service Paused',
    1: 'Checking',
    2: 'Working',
    8: 'Incident Reported',
    9: 'Incident Reported'
}

const monitorsRoute = async (req, res) => {
    const body = new FormData();

    body.append('api_key', STATUS_API_KEY)

    const _ = await axios.post(STATUS_URI, body, {
        headers: body.getHeaders()
    });

    const r = { result: [] }

    _.data.monitors.sort((a, b) => a.create_datetime - b.create_datetime)

    _.data.monitors.forEach(monitor => {
        r.result.push({
            id: makeIdFromString(monitor.id),
            service: {
                name: monitor.friendly_name,
                status: statuses[monitor.status]
            }
        })
    })

    res.json(r)
}

exports.monitorsRoute = monitorsRoute;