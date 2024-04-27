import React,{useState} from 'react';
function Football() {

    const[ram,setram]=useState(0);
    
    const[ram1,setram1]=useState(0);
    const[ram2,setram2]=useState(0);
    const[ram3,setram3]=useState(0);
    const bjp=() =>{
        setram(ram+1)

    }

    const congrs=() =>{
        setram1(ram1+1)

    }

    const congrs1=() =>{
      setram2(ram1+1)

  }


  const congrs2=() =>{
    setram3(ram1+1)

}



  return (
    <div>
        <div className='box'>
      {/* ***box1 start*** */}
     
        <div className='box1'>
            <h1>RAHUL KUMAR</h1>
            <img src={require('./imge/pngegg (1).png')}/>
        </div>
        <div className='box2'>
          <div className='box3'></div>
            <button className='button' onClick={bjp}>bjp</button></div>
      
      {/* *****box1 and******* */}
      
          
             {/* ***box2 start*** */}
     
        <div className='box1'>
            <h1>RAHUL KUMAR</h1>
            <img src={require('./imge/pngegg.png')}/>
        </div>
        <div className='box2'>
          <div className='box3'></div>
           
          <button className='button' onClick={congrs}>congrs</button>
          </div>
      {/* *****box2 and******* */}
      




           {/* ***box3 part*** */}
     
           <div className='box1'>
            <h1>RAHUL KUMAR</h1>
            <img src={require('./imge/unnamed.png')}/>
        </div>
        <div className='box2'>
          <div className='box3'></div>
           
          <button className='button' onClick={congrs1}>congrs</button>
          </div>
      {/* *****box3 and******* */}




      {/* ***box4 part*** */}
     
      <div className='box1'>
            <h1>RAHUL KUMAR</h1>
            <img src={require('./imge/CPIM_election_symbol.png')}/>
        </div>
        <div className='box2'>
          <div className='box3'></div>
           
          <button className='button' onClick={congrs2}>congrs</button>
          </div>
      {/* *****box4 and******* */}


      {/* ***box5 part*** */}
     
      <div className='box1'>
            <h1>RAHUL KUMAR</h1>
            <img src={require('./imge/CPIM_election_symbol.png')}/>
        </div>
        <div className='box2'>
          <div className='box3'></div>
           
          <button className='button' onClick={congrs2}>congrs</button>
          </div>
      {/* *****box5 and******* */}
      












      </div>





      
      

    {/* *****ans box****** */}
    <div className='box6'>
    <h1>bjp vote:{ram}</h1>
   <h1>congrs vote:{ram1}</h1>
   <h1>congrs vote:{ram2}</h1>
   <h1>congrs vote:{ram3}</h1>
  







  
  

    </div>
    </div>
  )
}

export default Football