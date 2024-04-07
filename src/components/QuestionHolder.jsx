import React from 'react'
import {decode} from 'html-entities'

export default function QuestionHolder({value, children}){
    const {question,id} = value
    
    return (
        <div className='container-question' key={id}>
            <p>{decode(question)}</p>
            <div className='container-answers'>
                {children}
            </div>
        </div>
    )
}