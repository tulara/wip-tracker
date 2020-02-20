const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: String,
    recipient: String,
    image: String,
});

const Project = mongoose.model('projects', projectSchema);

const getAll = async () => {
    return await Project.find({}).exec();
}

const saveProject = async (name, recipient, image) => {
    // validation on user entered data (i.e. all these args)
    console.log(`attempting to save with name: ${name}, recipient: ${recipient}, image: ${image}`);
    const project = new Project({name, recipient, image});

    const saved = await project.save();
    console.log(`saved object ${saved}`);
    // handle failure
    return saved;
} 

const removeProject = async (id) => {
    console.log(`removing project with id: ${id}`);
    await Project.findByIdAndDelete(id, (err) => {
        if(err) {
            console.log(err);
           // return ""; // error string?
        }
        console.log(`successfully deleted ${id}`);
    });
    return id;
}

module.exports = {
    getAll,
    saveProject,
    removeProject
}