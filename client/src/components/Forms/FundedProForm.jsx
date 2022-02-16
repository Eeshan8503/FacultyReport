import React from 'react'
import './style.css'
const FundedProForm = () => {
  var a="hello";
    function handler(event){
        alert("ds");
        event.preventDefault();
        console.log(event.target.TypeOfFunding.value)
    }
  return (
      <div>
        <h1 style={{textAlign:'center',marginTop:'2%'}}>Funded Projects</h1>
        <hr/>
    <div className='container'>
        <form onSubmit={handler}>
        <div className='gg'>

           <div>
            <label>Name of Principal Investigator:</label><br/>
            <input name="NPI" type='text'/>
           </div>
           <div>
            <label>Dept of Principal Investigator</label><br/>
            <input name="DPI" type='text'/>
           </div>
         <div>
           <label>Name of Research project</label>
            <br/>
            <input name="NRP" type='text'/>
           </div>
           <div>
           <label>Name of Funding Agency</label>
           <br/>
            <input name="NFA" type='text'/>
           </div>
            <div style={{marginTop:'4%'}}>
            <label>Type of funding</label>
            <br/>
            <select name="TypeOfFunding">
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
            <input name="NRP" type='text'/>
            </div>
            <div>
            <label>Academic Year</label>
            <br/>
            <input name="NRP" type='text'/>        
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