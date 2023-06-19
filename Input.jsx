import react,{useState} from "react";
import IToArray from "./IToArray";
import './App.scss';

// this will be the first component the users interacts with!
// this will send string to the IToArray component

function Input(){
    const[data,setData]=useState('');
    const [dat,setInputText]=useState('');
    const handleChange = (e) => {
        setInputText(e.target.value);
      };
    
    function timepass(){
      
      setData(dat);
      // console.log("from inside function = ",data);
      setInputText('');
      // e.preventDefault();
       }
     return  (
       <div >
      <form  >
        <input
          id="first_name"
          name="first_name"
          type="text"
          class="rounded-input1"
          onChange={handleChange}
          value={dat}
          placeholder="Enter the data here"
        />
        <button onClick={timepass} class="form-submit-button" type="button">Submit data</button>
      </form>
      <p></p>
      <p></p>
      {/* {console.log("from outside",data)} */}
      <IToArray st={data} />
     
          </div>
    )
     
}
export default Input;
