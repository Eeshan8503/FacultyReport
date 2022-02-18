const fundedProj=require('./../Model/FundedProjSchema');
const {catchAsync}=require('./../Util/catchAsync');

exports.addFundedProject=catchAsync(async(req,res)=>{
    console.log(req.body);
    const newFundedProj=await fundedProj.create(req.body);
    res.status(201).json({
        status:true,
        data:{
            PI:newFundedProj.PI,
            PIdept:newFundedProj.PIdept,
            nameOfProject:newFundedProj.nameOfProject,
            nameOfFundingAgency:newFundedProj.nameOfFundingAgency,
            typeOfFunding:newFundedProj.typeOfFunding,
            fundingAmount:newFundedProj.fundingAmount,
            AcademicYear:newFundedProj.AcademicYear
        }
    })
})