const mongoose=require('mongoose');
const Schema=mongoose.Schema
// const FundedProjSchema=require('./FundedProjSchema')
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    fundedProjects:{
        type: [{ type: Schema.Types.ObjectId, ref: 'fundedproj' }]
    }
})

module.exports = mongoose.model('user', userSchema);
