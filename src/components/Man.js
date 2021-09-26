import React from 'react'

export default function Man({imageCounter}) {
    return (
        <div className="hang">
            <img src={`images/hangman(${String(imageCounter)}).png`} alt="hangedMan"/>  
            
        </div>
    )
}
