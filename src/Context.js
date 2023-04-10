import { Children, createContext, useContext, useEffect, useState } from "react";

const table = {
    sports:21,
    history: 23,
    politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?';
const AppContext = createContext();
const AppProvider =({children})=>{


    const [loading,setLoading] = useState(false);
    const [waiting,setWaiting] =  useState(true);
    const [isModalopen,setModalOpen] = useState(false);
    const [quiz,setQuiz] = useState([]);
    const [correct,setCorrect] = useState(0);
    const [index,setIndex] = useState(0);
    const [theme,setTheme] = useState('light');
    const [error,setError] = useState({state:false,msg:''});
    // const [user,setUser] = useState(false);
    const [setting,setSetting] = useState({
        name:'',
        amount:0,  
        category:'sports',
        difficulty:'easy',
        type:'multiple',
    })

 

const fetching = async(url) => {
    
    try{
        setLoading(true);
        setWaiting(false);

    const resp = await fetch(url);
    const data = await resp.json();
    
    if(data){
        if(data.results.length>0){
            setLoading(false) 
            setQuiz(data.results);
        }
        else{
            console.log('result not found');
            setWaiting(true);
            setError({state:true,msg:`*Amount should be less `});

        }
    }else{
        console.log('error');
        setWaiting(true);
    }
    }catch(error){
        setLoading(false);
        console.log(error);
    }
}
 

const openModal = ()=>{
    setModalOpen(true);
}
const nextQuestion =()=>{
    setIndex((old)=>{
        const index = old +1; 
        if(index>quiz.length-1){
            openModal();
            return 0;
        }
        return index;
    })
}

const handleclick =(value)=>{
        if(value){
            setCorrect((old)=>old+1);
        }
    nextQuestion();
}

const restart =()=>{
    setWaiting(true);
    setCorrect(0);
    setModalOpen(false);
    setError({state:false,msg:''})
}

const handleChange =(e)=>{
e.preventDefault();
const name = e.target.name;
const value = e.target.value;
console.log(name,value);
setSetting({...setting,[name]:value})
}

const handlesubmit =(e)=>{
e.preventDefault();
const {category} = setting;
const url =`${API_ENDPOINT}amount=${setting.amount}&category=${table[category]}&difficulty=${setting.difficulty}&type=${setting.type}`;
fetching(url);
}

const toggle =()=>{
    if(theme=='light'){
        setTheme('dark');
        console.log('d')
    }else{
        setTheme('light');
        console.log('l')
    }
}

useEffect(()=>{
    document.documentElement.className = theme;
},[theme]);
    return(
        <AppContext.Provider value={{
            loading,
            isModalopen,
            quiz,
            index,
            correct,
            nextQuestion,
            waiting,
            setting,
            error,
            handleclick,
            restart,
            handleChange,
            handlesubmit,
            toggle,
            theme,
        }}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {useGlobalContext,AppProvider};