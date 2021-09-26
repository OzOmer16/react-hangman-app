import React, {useEffect} from 'react'

export default function Timer({timer,isTimeUp,clearTime,setisTimeUp,setTimer}) {

    useEffect(()=>{
        if(timer > 0){
          setTimeout(()=>{
            setTimer(timer - 1)
          },1000)
        }else{
          clearTime()
        
    
          setisTimeUp(true)
        }
    
        return ()=>{
          clearTime()
        }
       
    
      },[timer])

    return (
        <div>
            {timer}
            
        </div>
    )
}
