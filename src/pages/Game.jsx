import React from "react";
import request from "../api";
import { nanoid } from "nanoid";
import QuestionHolder from "../components/QuestionHolder";
import Answer from "../components/Answer";
import {Link} from "react-router-dom"

export default function Game(){
    const [allQuestions, setAllQuestions] = React.useState([{
        question: '',
        correctAnswer: '',
        arrayOfAnswers: []
    }])

    React.useEffect(()=>{
        async function loadQuestions(){
            const data = await request()
            
            setAllQuestions(() => {
                const questionObject = data.map((item)=> {
                    const allAnswers = [...item.incorrect_answers]
                    allAnswers.splice(Math.floor(Math.random()*5-1),0,item.correct_answer)
                    const arrayOfAnswers = allAnswers.map(answer => {
                        return {
                            value: answer,
                            isSelected: false,
                            isCorrect: answer === item.correct_answer ? true : false,
                            id: nanoid()
                        }
                    })
                    return {
                        question: item.question,
                        correctAnswer: item.correct_answer,
                        arrayOfAnswers: arrayOfAnswers,
                        id: nanoid()
                    }
                })
                return questionObject
            })      
        }
        loadQuestions()
    },[])

    const mainGame = allQuestions.map(question=>{
        return (
            <QuestionHolder 
                value={question}
                key={question.id}
                isAnswered={true}
            >
                {question.arrayOfAnswers.map(answer => {
                    return(
                        <Answer 
                            value={answer.value} 
                            isSelected={answer.isSelected}
                            isCorrect={answer.isCorrect}
                            id={answer.id}
                            isShown={false}
                            key={answer.id}
                            onClick = {() => handleClick(answer.id, question.id)}
                        />
                    )
                })}
            </QuestionHolder>
        )
    })

    function handleClick(answerId, questionId){
        setAllQuestions(prev => {
            return prev.map(ques => {
                if(ques.id === questionId){
                    ques.arrayOfAnswers.map(ans => {
                        if(ans.id === answerId){
                            ans.isSelected = !ans.isSelected
                        }else{
                            ans.isSelected = false
                        }
                        return ans
                    })
                }
                return ques
            })
        })
    } 

    return (
        <section className="container-game">
            {mainGame}
            <Link 
                className="button-check-answers" 
                to="/results"
                state={{allQuestions}}
            >Check Answers
            </Link>
        </section>
    )
}