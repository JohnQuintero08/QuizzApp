import React from 'react'
import { decode } from 'html-entities'

export default function Answer(props){
    const {value, isSelected, isCorrect, onClick, isShown, id} = props
    function colorDefinition(){
        if(isShown){
            if(isCorrect){
                return { backgroundColor: 'green'}
            }if(isSelected){
                return{ backgroundColor: 'red'}
            }
        }else if(isSelected){
            return { backgroundColor: '#D6DBF5'}
        }
    }

    return (
        <button 
            className='button-answer' 
            onClick={onClick}
            style={colorDefinition()}
            key={id}
        >
            {decode(value)}
        </button>
    )
}