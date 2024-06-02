import { useState } from "react"


function Form (){

    const [text, setText] = useState('');
    const [arr,setArr] = useState([]);
  
    const item = arr.map((item,index)=>{
        return <p key={index}>{item.toUpperCase()}</p>;
    });
  
    const handleChange = (e) =>{
      e.preventDefault();
      setArr([...arr,text]);
      setText('');
      
  }
   
    return(
   
        <form  onSubmit={handleChange}>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
        <button type='submit'>Добавить</button>
        {item}
        </form>
   
    )
}

export default Form