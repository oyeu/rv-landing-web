import * as React from 'react'
import './index.scss'

const Form = props => {
  return (
    <form action="" className='contact-form'>
        <div className='name-and-email-wrapper'>
            <input type="text" name="name" id="" placeholder={props.data.nameInputPlaceholder}/>
            <input type="email" name="email" id="" placeholder={props.data.emailInputPlaceholder}/>
        </div>
        <div className='companyName-and-solutions-wrapper'>
            <input type="text" name="companyName" id="" placeholder={props.data.companyNameInputPlaceholder}/>
            <select name="" id="" className='solution-list'>
                <option disabled defaultValue>{props.data.bPOSolutionList.bPOSolutionInputPlaceholder}</option>
                {props.data.bPOSolutionList.bPOSolutions.map(solution => {
                    return <option key={solution} value={solution}>{solution}</option>
                })}
            </select>
        </div>
        <div className='goals-wrapper'>
            <textarea name="" id="" cols="30" rows="3" placeholder={props.data.goalsInputPlaceholder}></textarea>
        </div>
        <button type="submit" className='contact-submit-button'>
            {props.data.submitButtonText}
        </button>
    </form>
  )
}

export default Form