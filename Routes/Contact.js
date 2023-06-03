const express = require("express")
// const Contact = require("../Models/Contact")
const { createContact, getContact, deleteContact, updateContact, getOneContact } = require("../Controllers/Contact")
const contactRouter=express.Router()

    contactRouter.post("/createContact",createContact)
    contactRouter.get("/readContact",getContact)
    contactRouter.delete("/deleteContact/:id",deleteContact)
    contactRouter.put("/updateContact/:id",updateContact)
    contactRouter.get("/readOneContact/:id",getOneContact)


module.exports=contactRouter