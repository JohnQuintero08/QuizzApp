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
            console.log(score)
            return score
        })  
    },[])

    const printResults = location.state.allQuestions.map(question=>{
        return (
            <QuestionHolder 
                value={question}
                key={question.question.id}
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
                to="/"
            >Play Again</Link>
        </div>

    )
}