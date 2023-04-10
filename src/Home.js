import React from 'react' 
import Loading from './Components/Loading'
import Setupform from './Components/Setupform'
import Modal from './Components/Modal'
import { useGlobalContext } from './Context'

const Home = () => {
  const {loading,isModalopen,quiz,index,correct,nextQuestion,waiting,error,handleclick} = useGlobalContext();
  // console.log(correct);
   
  if(waiting){
    return <Setupform/>
  }
    
  if(loading){
    return <Loading/>
  }

  const {incorrect_answers,correct_answer,question} = quiz[index];

  const answers = [...incorrect_answers];
  
  let no = Math.floor(Math.random()*4);
  
  if(no==3){
    answers.push(correct_answer);
  }else{
    answers.push(answers[no]);
    answers[no] = correct_answer;
  }
 



  
   
  return (  
    <> 
    <Modal/>
    <div className="quiz-container">
      <div className="correct-answer">
        <p>Correct answer : {correct}/{index+1}</p>
      </div>
      <div className="questions">
         <h3 className='ques' dangerouslySetInnerHTML={{__html:question}}/>
      </div>
      <div className="options">
         {answers.map((items,index)=>{
          return (
            <button className='options-btn' key={index} onClick={()=>handleclick(correct_answer==items)} dangerouslySetInnerHTML={{__html:items}}/>
          )
        })
      }
      </div> 
        <div className="next-btn">
      <button onClick={()=>nextQuestion()}  >Next Question</button>
        </div>
    </div>

    </>
  )
}

export default Home