const cds = require("@sap/cds");
const {Books} = cds.entities;

module.exports = srv =>{

    srv.on("RED","GetBooks", async req=>{
        return await cds.transaction(req).run(SELECT.from(Books));
    });

    srv.on("CREATE","GetBooks", async req=>{
        return await cds.tx(req).run(INSERT.into(Books).entries(req.data));
    });
    srv.on("DELETE","DeleteBooks", async req=>{
        console.log(req.data);
        return await cds.tx(req).run(DELETE.from(Books).where(req.data));
    });

    srv.on("getDate",res=>{
        return new Date();
    })

    srv.on("getMoreStockBook",req=>{
       // return cds.tx(req).run(SELECT.one.from(Books).orderBy({quanity:'desc'}));
      // return cds.tx(req).read(Books).orderBy({quanity:'desc'}).limit(1);
      return srv.tx(req).read(srv.entities.GetBooks).orderBy({quanity:'desc'}).limit(1);
    });

    srv.on("decreaseQuanity",async req=>{
       await  cds.tx(req).update(Books).set({quanity: {'-=':1}}).where(req.data);
        return "Done";
        //cds.tx(req).update(Books).where(req.data).with({title:'Sturmhöhe'})
    })

}