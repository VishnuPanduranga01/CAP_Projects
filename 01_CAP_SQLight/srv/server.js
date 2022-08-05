const cds = require("@sap/cds");
const odataV2 = require("@sap/cds-odata-v2-adapter-proxy");

cds.on('bootstrap',app=>{
    app.use(odataV2());
});

module.exports = cds.server;