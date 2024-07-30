const mongoose = require('mongoose');

const taskListDataSchema = new mongoose.Schema({
    task: String,
    index: Number
}); 

module.exports = mongoose.model('taskList', taskListDataSchema);