
const mongoose  = require("mongoose")


const NoteSchema = mongoose.Schema({


    Title: {
        type: String,
        required: true
    },


    Description: {
        type: String,
        required: true
    }

})

module.exports  = mongoose.model("Note", NoteSchema)