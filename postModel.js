const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema ({
    subject: {typer: String},
    body:{type: String},
    user: {type: String, default: 'Bob'},
},
    //comment field here
    {timestamps: true}
    )