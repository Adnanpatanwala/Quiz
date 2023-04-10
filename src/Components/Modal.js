import React from 'react'
import { useGlobalContext } from '../Context'

const Modal = () => {
    const {isModalopen,correct,quiz,restart,setting} = useGlobalContext();
    // let ans = ((correct/quiz.length)*100).toFixed(0);
  return (
    <div className={isModalopen?'modal isOpen':'modal'}>
        <div className="modal-content">
        <h3>Congrats !!!!</h3>
        <h4>{`${setting.name} you have answered  ${((correct/quiz.length)*100).toFixed(0)}% of the questions correctly.`}</h4>
        <button className='submit-btn' onClick={()=>restart()}>Restart</button>
        </div>
    </div>
  )
}

export default Modal