import React from 'react'
import api from '../../util/api';
import './style.css'
import * as XLSX from 'xlsx'
const FundedProForm = () => {
  var a="hello";
    async function handler(event){
        event.preventDefault();
        console.log(event.target.typeOfFunding.value)
        const newFundedProj={
          PI:'',
          PIdept:"",
          nameOfFundingAgency:"",
          typeOffunding:"",
          fundingAmount:"",
          AcademicYear:"",
          nameOfProject:''
        }
        newFundedProj.PI=event.target.PI.value
        newFundedProj.PIdept=event.target.PIdept.value
        newFundedProj.nameOfFundingAgency=event.target.nameOfFundingAgency.value
        newFundedProj.typeOfFunding=event.target.typeOfFunding.value
        newFundedProj.fundingAmount=event.target.fundingAmount.value
        newFundedProj.AcademicYear=event.target.AcademicYear.value
        newFundedProj.nameOfProject=event.target.nameOfProject.value
        await api.post('/client/fundedProject',newFundedProj).then(()=>{alert("succesful")}).catch(()=>{alert("ERROR")});
    }
    async function importSheet(event){
      event.preventDefault();
      const promise=new Promise((resolve,reject)=>{
        const fr=new FileReader();
        fr.readAsArrayBuffer(event.target.file.files[0]);
        fr.onload=(e)=>{
          const bufferArray=e.target.result;
          const wb=XLSX.read(bufferArray,{type:'buffer'})
          const wsname=wb.SheetNames[0];
          const ws=wb.Sheets[wsname];
          const data=XLSX.utils.sheet_to_json(ws);

          resolve(data);
        };
        fr.onerror=(e)=>{
          reject(e);
        }
      })

      promise.then((d)=>{console.log(d)})
    }
  return (
      <div>
      <form onSubmit={importSheet}>
      <input name='file'  type='file'/>
      <input className='sbt-btn' type='submit'/>
      </form>
        <h1 style={{textAlign:'center',marginTop:'2%'}}>Funded Projects</h1>
        <hr/>
    <div className='container'>
        <form onSubmit={handler}>
        <div className='gg'>

           <div>
            <label>Name of Principal Investigator:</label><br/>
            <input name="PI" type='text'/>
           </div>
           <div>
            <label>Dept of Principal Investigator</label><br/>
            <input name="PIdept" type='text'/>
           </div>
         <div>
           <label>Name of Research project</label>
            <br/>
            <input name="nameOfProject" type='text'/>
           </div>
           <div>
           <label>Name of Funding Agency</label>
           <br/>
            <input name="nameOfFundingAgency" type='text'/>
           </div>
            <div style={{marginTop:'4%'}}>
            <label>Type of funding</label>
            <br/>
            <select name="typeOfFunding">
            <option value="central">central</option>
            <option value="state">state</option>
            <option value="industrial">industrial</option>
            <option value="teqip">Teqip</option>
            <option value="R&D">R&D</option>
            <option value="others">others</option>
          </select>
            </div>
          <div>
            {/* <input name="NFA" type='text'/> */}
            <br/>
            <label>Funding Amount</label>
            <br/>
            <input name="fundingAmount" type='text'/>
            </div>
            <div>
            <label>Academic Year</label>
            <br/>
            <input name="AcademicYear" type='text'/>        
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <input className='sbt-btn' type='submit'/>
        </div>
        </form>
    </div>
    </div>
  )
}

export default FundedProForm