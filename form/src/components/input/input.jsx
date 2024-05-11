import { useState, useRef } from "react"


function Form (){

    const [text, setText] = useState('');
    const [arr,setArr] = useState([]);
  
    const item = arr.map((item)=>{
        return <p>{item.toUpperCase()}</p>;
    });
  
    const handleChange = (e) =>{
      e.preventDefault()
      
  }
   
    return(
        <>
        <form  onSubmit={handleChange}>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
        <button type='submit' onClick={()=>setArr([...arr,text])}>Добавить</button>
        {item}
        </form>
        </>
    )
}

export default Form