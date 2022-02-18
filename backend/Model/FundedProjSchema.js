const mongoose=require('mongoose');
const {Schema}=mongoose;
const FundedProjSchema=new mongoose.Schema({
    PI:{
        type:String,
        required:true
    },
    PIdept:{
        type:String,
        required:true
    },
    nameOfProject:{
        type:String,
        required:true
    },
    nameOfFundingAgency:{
        type:String,
        required:true
    },
    typeOfFunding:{
        type:String,
        required:true
    },
    fundingAmount:{
        type:String,
        required:true
    },
    AcademicYear:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('fundedProj', FundedProjSchema);
