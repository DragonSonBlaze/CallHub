import react,{useState} from "react";
import IToArray from "./IToArray";
import './App.css';

// this will be the first component the users interacts with!
// this will send string to the IToArray component

function Input(){

     const[data,setData]=useState('');
    const [dat,setInputText]=useState('');
    const handleChange = (e) => {
        setInputText(e.target.value);
      };
    const timepass =(e) => {setData(dat); e.preventDefault()}
    return (
       <div >
      <form  background-color="yellow"onSubmit={timepass}>
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
      <IToArray st={data} />
    </div>
    )
   
}
export default Input;
