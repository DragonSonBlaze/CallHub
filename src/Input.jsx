import react,{useState} from "react";
import IToArray from "./IToArray";
import './App.scss';

// this will be the first component the users interacts with!
// this will send string to the IToArray component

function Input(){
  const[x,changeVariable]=useState(0);
  const[data,setData]=useState('');
    const [dat,setInputText]=useState('');
    const handleChange = (e) => {
        setInputText(e.target.value);
      };
    const timepass =(e) => {setData(dat); e.preventDefault();changeVariable(1)}
    return (
       <div >
      <form  onSubmit={timepass}>
        <input
          id="first_name"
          name="first_name"
          type="text"
          onChange={handleChange}
          value={dat}
          placeholder="Enter the data here"
        />
        <button class="form-submit-button" type="submit">Submit data</button>
      </form>
      <IToArray st={data} x={x}/>
    </div>
    )
   
}
export default Input;
