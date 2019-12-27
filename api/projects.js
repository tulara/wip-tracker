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

const saveProject = async (name, recipient) => {
    console.log(`attempting to save with name: ${name}, recipient: ${recipient}`);
    const project = new Project({name, recipient});
    console.log(project);

    const saved = await project.save();
    console.log(`saved object with id ${saved}`);
    // handle failure
    return saved._id;
} 

module.exports = {
    getAll,
    saveProject
}