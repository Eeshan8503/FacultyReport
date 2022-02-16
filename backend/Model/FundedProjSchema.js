const mongoose=require('mongoose');
const {Schema}=mongoose;
const FundedProjSchema=new mongoose.Schema({
    PI:{
        type:String
    },
    PIdept:{
        type:String
    },
    nameOfProject:{
        type:String
    },
    nameOfFundingAgency:{
        type:String
    },
    typeOFfunding:{
        type:String
    },
    fundingAmount:{
        type:String
    },
    AcademicYear:{
        type:String
    }
})

module.exports = mongoose.model('fundedProj', FundedProjSchema);
