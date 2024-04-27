import React,{useState} from 'react';
  import sound from '../componts/Sound/beep-01a.mp3';
function Football() {

    const[ram,setram]=useState(0);
    
    const[ram1,setram1]=useState(0);
    const[ram2,setram2]=useState(0);
    const[ram3,setram3]=useState(0);

    const[ram4,setram4]=useState(0);
    const[color,setcolor] = useState('red')
    const[shadow, setshadow] = useState('none')


    const[color1,setcolor1] = useState('red')
    const[shadow1, setshadow1] = useState('none')


    const[color2,setcolor2] = useState('red')
    const[shadow2, setshadow2] = useState('none')


    const[color3,setcolor3] = useState('red')
    const[shadow3, setshadow3] = useState('none')


    const[color4,setcolor4] = useState('red')
    const[shadow4, setshadow4] = useState('none')
    const[rahul,setrahul] = useState(false);


    const bjp=() =>{
        setram(ram+1);
        setcolor('green');
        setshadow('0px 0px 10px 6px green')

       setTimeout(()=>{
        setcolor('red')
        setshadow('none')
       },2000) 

       setrahul(true)

       setTimeout(()=>{
        setrahul(false)
       },5000)
       new Audio(sound).play();

    }

    const congrs=() =>{
        setram1(ram1+1)
        setcolor1('green');
        setshadow1('0px 0px 10px 6px green')

       setTimeout(()=>{
        setcolor1('red')
        setshadow1('none')
       },2000)
     


       setrahul(true)

       setTimeout(()=>{
        setrahul(false)
       },5000)
       new Audio(sound).play();

    }





    

    const congrs1=() =>{
      setram2(ram1+1)
      setcolor2('green');
      setshadow2('0px 0px 10px 6px green')

     setTimeout(()=>{
      setcolor2('red')
      setshadow2('none')
     },2000)
     new Audio(sound).play();

     setrahul(true)

     setTimeout(()=>{
      setrahul(false)
     },5000)
     new Audio(sound).play();

  }


  const congrs2=() =>{
    setram3(ram1+1)
    setcolor3('green');
    setshadow3('0px 0px 10px 6px green')

   setTimeout(()=>{
    setcolor3('red')
    setshadow3('none')
   },2000)

   setrahul(true)

   setTimeout(()=>{
    setrahul(false)
   },5000)
   new Audio(sound).play();

}

const congrs3=() =>{
  setram4(ram1+1)
  setcolor4('green');
  setshadow4('0px 0px 10px 6px green')

 setTimeout(()=>{
  setcolor4('red')
  setshadow4('none')
 },2000)

 setrahul(true)

 setTimeout(()=>{
  setrahul(false)
 },5000)
 new Audio(sound).play();
}



  return (
    <div>
        <div className='box'>
      {/* ***box1 start*** */}
     
        <div className='box1'>
            <h1>Bharatiya Janata Party</h1>
            <img src={require('./imge/pngegg (1).png')}/>
        </div>
        <div className='box2'>
        <div className='box3' style={{backgroundColor:color, boxShadow:shadow}}></div>
            <button className='button' onClick={bjp} disabled={rahul}>	BJP</button></div>
      
      {/* *****box1 and******* */}
      
          
             {/* ***box2 start*** */}
     
        <div className='box1'>
            <h1>	Indian National Congress</h1>
            <img src={require('./imge/pngegg.png')}/>
        </div>
        <div className='box2'>
          {/* <div className='box3'></div> */}
          <div className='box3' style={{backgroundColor:color1, boxShadow:shadow1}}></div>
           
          <button className='button' onClick={congrs} disabled={rahul}>INC</button>
          </div>
      {/* *****box2 and******* */}
      




           {/* ***box3 part*** */}
     
           <div className='box1'>
            <h1>Bahujan Samaj Party</h1>
            <img src={require('./imge/unnamed.png')}/>
        </div>
        <div className='box2'>
          {/* <div className='box3'></div> */}
          <div className='box3' style={{backgroundColor:color2, boxShadow:shadow2}}></div>
          <button className='button' onClick={congrs1} disabled={rahul}>BSP</button>
          </div>
      {/* *****box3 and******* */}




      {/* ***box4 part*** */}
     
      <div className='box1'>
            <h1>Communist Party of India</h1>
            <img src={require('./imge/CPIM_election_symbol.png')}/>
        </div>
        <div className='box2'>
        <div className='box3' style={{backgroundColor:color3, boxShadow:shadow3}}></div>
           
          <button className='button' onClick={congrs2} disabled={rahul}>CPl</button>
          </div>
      {/* *****box4 and******* */}


      {/* ***box5 part*** */}
     
      <div className='box1'>
            <h1>NOT</h1>
            <img src={require('./imge/1200px-NOTA_Option_Logo.svg.png')}/>
        </div>
        <div className='box2'>
          {/* <div className='box3'></div> */}
          <div className='box3' style={{backgroundColor:color4, boxShadow:shadow4}}></div>
          <button className='button' onClick={congrs3} disabled={rahul} >congrs</button>
          </div>
      {/* *****box5 and******* */}




      {/* ***box6 part*** */}
     
      <div className='box1'>
            <h1></h1>
            {/* <img src={require('./imge/1200px-NOTA_Option_Logo.svg.png')}/> */}
        </div>
        <div className='box2'>
          <div className='box3'></div>
           
          <button className='button' onClick={congrs3} disabled={rahul}>congrs</button>
          </div>
      {/* *****box6 and******* */}




      
      {/* ***box7 part*** */}
     
      <div className='box1'>
            <h1></h1>
            {/* <img src={require('./imge/1200px-NOTA_Option_Logo.svg.png')}/> */}
        </div>
        <div className='box2'>
          <div className='box3'></div>
           
          <button className='button' onClick={congrs3} disabled={rahul}>congrs</button>
          </div>
      {/* *****box7 and******* */}




      
      
      {/* ***box8 part*** */}
     
      <div className='box1'>
            <h1></h1>
            {/* <img src={require('./imge/1200px-NOTA_Option_Logo.svg.png')}/> */}
        </div>
        <div className='box2'>
          <div className='box3'></div>
           
          <button className='button' onClick={congrs3} disabled={rahul}>congrs</button>
          </div>
      {/* *****box8 and******* */}



      
      












      </div>





      
      

    {/* *****ans box****** */}
    <div className='box6'>
    <h1>	BJP:{ram}</h1>
   <h1>INC:{ram1}</h1>
   <h1>BSP:{ram2}</h1>
   <h1>CPl:{ram3}</h1>
   <h1>NOT:{ram4}</h1>
  







  
  

    </div>
    </div>
  )
}

export default Football