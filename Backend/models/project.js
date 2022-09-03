const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    Solution:{
        type:String,
    },
    Technical_Description:{
        type:String,
    },
    Prototyping_Steps:[{
        type:String
    }],
    techStacks : [{
        type : String,
        required : true
    }],
    projectLink: {
        type : String,
        required : true
    },
    downloadLink: {
        type : String,
        required : true
    },
    category: {
        type: String,
        requored: true
    },
    level: {
        type: String,
        requored: true
    },
    Real_life:{
        type:String
    }
});

const projectModel = mongoose.model('Project', projectSchema);
module.exports = projectModel;