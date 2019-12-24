const mongoose = require('mongoose');
// Why do I need this?
mongoose.Promise = global.Promise;

const host = process.env.MONGO_HOST || "192.168.99.100";
const url = `mongodb://${host}:27017/wip-tracker`;

const connect = async () => {
    return await mongoose.connect(url, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    );
}

module.exports = {
    connect: connect
}