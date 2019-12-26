const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: String,
    recipient: String
});

const Project = mongoose.model('projects', projectSchema);

const getAll = async () => {
    return await Project.find({}).exec();
}

module.exports = {
    getAll: getAll
}