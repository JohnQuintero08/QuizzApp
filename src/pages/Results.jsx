import React from 'react'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
import QuestionHolder from '../components/QuestionHolder'
import Answer from '../components/Answer'

export default function Results(){
    const [points, setPoints] = React.useState(0)
    const location = useLocation()   
    
    React.useEffect(()=>{
        setPoints(()=>{
            let score = 0
            location.state.allQuestions.forEach(ques => {
                ques.arrayOfAnswers.forEach(ans =>{
                    if(ans.isSelected && ans.isSelected === ans.isCorrect){
                        score++
                    }
                })
            })
            return score
        })  
    },[])

    function evaluateIsAnswered(question){
        const isAnswered = question.arrayOfAnswers.find(ans => ans.isSelected === true)
        return isAnswered ? true : false
    }

    const printResults = location.state.allQuestions.map(question=>{
        return (
            <QuestionHolder 
                value={question}
                key={question.question.id}
                isAnswered={evaluateIsAnswered(question)}
            >
                {question.arrayOfAnswers.map(answer => {
                    return(
                        <Answer 
                            value={answer.value} 
                            isSelected={answer.isSelected}
                            isCorrect={answer.isCorrect}
                            id={answer.id}
                            isShown={true}
                            key={answer.id}
                        />
                    )
                })}
            </QuestionHolder>
            
        )
    })

    return (
        <div className='container-results'>
            {printResults}
            <p className='text-points'>You scored {points}/5 points</p>
            <Link 
                className='button-restart'
                to="/game"
            >Play Again</Link>
        </div>

    )
}