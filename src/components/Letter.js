import React, {useState} from 'react'


export default function Letter({letter,checkLetter}) {


    const [clicked,setClicked] = useState(false)

    function letterHandler(e){
        setClicked(true)
        checkLetter(e.target.textContent)
        
    }

    const style = {
        visibility: `${clicked?"hidden":"visible"}`
    }

    return (
        <div onClick={letterHandler} style={style} className="letter">
            {letter}   
        </div>
    )
}
