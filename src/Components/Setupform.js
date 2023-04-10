import React from 'react'
import { useGlobalContext } from '../Context'

const Setupform = () => {
    const {isModalopen,handleChange,setting,handlesubmit,error} = useGlobalContext();
  return ( 
    
    <div className={isModalopen?'setup-container isopen':'setup-container'}>
        <form onSubmit={handlesubmit}>
 
            <h2 className='heading-setup'>SETUP QUIZ</h2>
        
        <div className="form-control">
        <label htmlFor="name">Enter your name </label>
        <input type="text" name='name' value={setting.name} onChange={handleChange}/> 
        </div>
        <div className="form-control">
            <label htmlFor="amount">amount</label>
            <input
             type="number"
             name='amount' 
             value={setting.amount} 
             onChange={handleChange}
             min={1}
             max={50}
             />
        </div>
        <div className="form-control">
            <label htmlFor="category">category</label>
            <select 
            name="category" 
            id="category"
             value={setting.category} 
             onChange={handleChange}
             
             > 
                <option value="sports">sports</option> 
                <option value="history">history</option> 
                <option value="politics">politics</option> 
                
            </select>
        </div>
        <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select name="difficulty" id="dificulty" value={setting.difficulty} onChange={handleChange} >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
        </div>
        {/* <div className="form-control">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
                <option value="">multi</option>
            </select>
        </div> */}

        <div className="error">
        {error.state?error.msg:null}
        </div>

    <div className="submit">

    <button className='submit-btn' type='submit'>Submit</button>
    </div>
        </form>
    </div>

  )
}

export default Setupform