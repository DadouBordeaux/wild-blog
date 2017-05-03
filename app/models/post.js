/*
This file define document schema for post
*/
'use strict'
let mongoose = require('mongoose')

// Create schema Post
module.exports = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    content: {
        type: String
    },
    published: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}))
