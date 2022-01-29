let mongoose = require("mongoose")
const Schema = mongoose.Schema

const TaskSchema = Schema({
    title:String,
    author:String,
    description: String,
    post_data: String
    post_date: {
        type: any,
        default: Date.now
    }
})

module.exports = mongoose.model('tasks',TaskSchema)