import React, { useEffect,useState} from 'react'


export default function Category({category,chooseCategory}) {

   

    useEffect(()=>{
    
        console.log(Object.keys(category))
         
    },[])

    return (
        <div className="categories">
            {Object.keys(category).map(ctgr => 
                 <button onClick={() => chooseCategory(ctgr)} key={ctgr}>{ctgr.toLocaleUpperCase()}</button>
            )}
           

            
        </div>
    )
}
