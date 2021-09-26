import React,{useState,forwardRef} from 'react'

const Word = forwardRef(({word,lettersIncluded},ref) => {
    



    return (
        <div className="word-container" ref={ref}>
            {word.split("").map((letter,index) =>{
                return <span className="word" key={index}>{lettersIncluded.includes(letter)?letter:""}</span>
            })}
            
        </div>
    )
})


export default Word
