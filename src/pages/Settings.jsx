import React from 'react'

export default function Settings(props){
    const [gameParameters, setGameParameters] = React.useState({
        fullName: "",
        difficulty: "medium",
        numberOfQuestions: '5',
        isChecked: false,
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setGameParameters(prevParams => {
            return {
                ...prevParams,
                [name]: type === 'checkbox'? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        props.gamingProps(gameParameters)
    }

    return (
        <section className='page-settings'>
            <form className='form-settings' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={handleChange}
                    name='fullName'
                    value={gameParameters.fullName}
                />

                <label htmlFor='difficulty'>Level</label>
                <select
                    id='difficulty'
                    value={gameParameters.difficulty}
                    onChange={handleChange}
                    name='difficulty'
                >
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>

                <fieldset>
                    <legend>Number of Questions</legend>
                    <input
                        id='3'
                        name='numberOfQuestions'
                        value='3'
                        type='radio'
                        onChange={handleChange}
                        checked={gameParameters.numberOfQuestions === '3'}
                    />
                    <label htmlFor='3'>3</label>
                    <input
                        id='5'
                        name='numberOfQuestions'
                        value='5'
                        type='radio'
                        onChange={handleChange}
                        checked={gameParameters.numberOfQuestions === '5'}
                        defaultChecked
                    />
                    <label htmlFor='5'>5</label>
                    <input
                        id='10'
                        name='numberOfQuestions'
                        value='10'
                        type='radio'
                        onChange={handleChange}
                        checked={gameParameters.numberOfQuestions === '10'}
                    />
                    <label htmlFor='10'>10</label>
                </fieldset>

                <div>
                    <input
                        type='checkbox'
                        id='isRobot'
                        checked={gameParameters.isChecked}
                        onChange={handleChange}
                        name='isChecked'
                    />
                    <label htmlFor='isRobot'>Are you a robot?</label>
                </div>
                <button className='button-link button-save-settings'> SAVE </button>
            </form>
        </section>
    )
}