import {useEffect, useState,useRef} from "react"
import "./App.css"
import Letter from "./components/Letter"
import Man from "./components/Man"
import Word from "./components/Word"
import Score from "./components/Score"
import Category from "./components/Category"
import Timer from "./components/Timer"



function App() {
  let num = 0
  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const [category, setCategory] = useState({
    animals: ["LEOPARD","COW","CROCODILE","ELEPHANT","LION"],
    professions: ["BUTCHER","SOLDIER","ARCHITECT","SCIENTIST","FARMER","TEACHER","GARDENER"],
    colors: ["BLACK","RED","ORANGE","GREEN","BLUE","TURQUOISE","MAGENTA"],
    countries: ["TURKEY","USA","GERMANY","BULGARIA","SERBIA","FRANCE","RUSSIA","KAZAKHSTAN"],
    capitalCities: ["ANKARA","BERLIN","MOSCOW","BELGRAD","PARIS","LONDON","VIENNA"]
}
)
  const [lettersIncluded,setLettersIncluded] = useState([])
  const [isCategoryChoosen, setisCategoryChoosen] = useState(false)
  const [categoryName, setcategoryName] = useState("")
  const [word,setWord] = useState("initial")
  const [imageCounter,setImageCounter] = useState(9)
  const [score, setScore] = useState(0)
  const [isWordCompleted, setisWordCompleted] = useState(false)
  const [isHanged, setisHanged] = useState(false)
  const [timer, setTimer] = useState(100)
  const [isTimeUp, setisTimeUp] = useState(false)

  const referance = useRef()




  useEffect(()=>{
    try {
      checkComplete()
    } catch (error) {
      console.log("error")
      
    }
    
  },[score])







  function clearTime() {
    clearTimeout(setTimeout(()=>{
      setTimer(timer - 1)
    },1000))

  }

  function chooseCategory(ctgr) {
    setcategoryName(ctgr)
    setisCategoryChoosen(true)
    setWord(category[`${ctgr}`][Math.floor(Math.random() * category[`${ctgr}`].length)])
    
  }

  function nextWord() {
    setWord(category[`${categoryName}`][Math.floor(Math.random() * category[`${categoryName}`].length)])
    setLettersIncluded([])
    setisWordCompleted(false)

    
  }

  function resetGame() {
    setLettersIncluded([])
    setisCategoryChoosen(false)
    setImageCounter(9)
    setScore(0)
    setisWordCompleted(false)
    setisHanged(false)
    setTimer(100)
    setisTimeUp(false)

    
  }
 

  


  function checkComplete() {

    referance.current.childNodes.forEach(element => {
      if(element.innerHTML !== ""){
        num = num + 1

      }

    });


    if(num === word.length){
      setisWordCompleted(true)
     
    }

    
  }


    

 



  function checkLetter(letter) {
    if(word.split("").includes(letter)){
      setLettersIncluded([...lettersIncluded,letter])
      
    
     
       setScore(score + 50)
    }else{
      
      setImageCounter(imageCounter - 1)
      if(imageCounter == 2){
        if(timer == 0){
          clearTime()

        }
        setisHanged(true)
        
        
       

      }
    
      setScore(score - 50)
    }
    
  }

  {
    if(isTimeUp || isHanged){
      return <Score score={score} ishanged={isHanged} resetGame={resetGame}/>

    }else{
      return (
        <div className="container">
          

          {isCategoryChoosen?<div className="game">
            <div className="timer">
            <Timer timer={timer} isTimeUp={isTimeUp} clearTime={clearTime} setTimer={setTimer} setisTimeUp={setisTimeUp}/>
            </div>
            <div className="man-score-word">
              <Man imageCounter={imageCounter}/>
              <div className="score-word">
                <Word ref={referance} word={word} lettersIncluded={lettersIncluded}/>
                <div className="score">{score}</div> 
              </div>
            </div>
          
            
            
      
          
            {isWordCompleted?<button className="nextbtn" onClick={nextWord}>Next</button>:<div className="alphabet">
              {letters.map(letter=>{
                return <Letter key={letter} checkLetter={checkLetter} letter={letter}/>
              })}
            </div>}
          </div>:<Category category={category} chooseCategory={chooseCategory}/>}

       
         
    
         
        </div>
    
      )

    }
  }

 
  

}

export default App;
