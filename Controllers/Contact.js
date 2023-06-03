const Contact = require("../Models/Contact")

exports.createContact=async(req,res)=>{
    
        try {
            const found = await Contact.findOne({email : req.body.email})
            if (found){
                return res.status(400).send("email already in use")
            }
            const newContact=new Contact(req.body)
            await newContact.save()
            res.status(200).send({msg : "Contact added successfully ! ",newContact})
        } catch (error) {
            res.status(500).send("Could not add contact")
        }
    }

exports.getContact=async(req,res)=>{
    try {
        const contacts= await Contact.find()
        res.status(200).send({msg :"Contact list",contacts})
    } catch (error) {
        res.status(500).send("Could not get contact")
    }
}

exports.deleteContact=async(req,res)=>{
    try {
        const {id} = req.params
         await Contact.findByIdAndDelete(id)
         res.status(200).send("Contact deleted successfully")
    } catch (error) {
        res.status(500).send("Could not delete contact")
    }
}


exports.updateContact=async(req,res)=>{
    try {
        const {id}= req.params
        await Contact.findByIdAndUpdate(id,{$set: req.body})
        res.status(500).send({msg: "contact updated sucessfully"})
        
    } catch (error) {
        res.status(500).send("Could not update contact")
    }
}

exports.getOneContact=async(req,res)=>{
    try {
        const {id}=req.params
        const found = await Contact.findById(id)
        res.status(200).send({msg : "contact found ",found})
    } catch (error) {
        res.status(500).send("Could not find contact")
    }
}

