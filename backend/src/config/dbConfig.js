const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://ykaro011102:senhadotypescriptraining@tasklistdata.pvzhfuq.mongodb.net/?retryWrites=true&w=majority&appName=taskListData';

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;