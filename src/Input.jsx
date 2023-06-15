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
    let g=[];
    const timepass =() => {
        g=data;
       g+=dat;
       g+=" ";
       setInputText('');
      setData(g);
      // e.preventDefault();
       }
    return (
       <div >
      <form  >
        <input
          id="first_name"
          name="first_name"
          type="text"
          onChange={handleChange}
          value={dat}
          placeholder="Enter the data here"
        />
        <button onClick={timepass} class="form-submit-button" type="button">Submit data</button>
      </form>
      <p></p>
      <p></p>
      <IToArray st={data} />
          </div>
    )
   
}
export default Input;
