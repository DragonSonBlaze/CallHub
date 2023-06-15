import react from "react";
import Input from "./Input";
import Table from "./table";
import './App.scss';

// is the number is 10 digits long, we are gold but in case of remove the first 2 digits

function IToArray(props){
    // this is the input
    console.log(props.st)
let s=props.st 
let arr=[] //this will be the output array
let id=1// this will keep track of the id or the number of receivers
let tempString="" // this help keep track of elements of a certain receiver
let consecutiveNo=0; // this will help to locate 10 consecutive whole numberes by taping into their ascii values

for(let i=0; i <s.length;++i){
  if(s[i]===' '){
    if(consecutiveNo>=10){
      let g=tempString;
      g=g.slice(g.length-10,g.length);
      let u={id:id, Name:tempString.slice(0,tempString.length-consecutiveNo-1),PhoneNumber:parseInt(g)};
      arr.push(u);
      id=id+1;
      tempString=s[i];
    }else tempString=tempString+s[i];
   
    consecutiveNo=0;
  }else if(s[i]-'0' >= 0 && s[i] -'0' <=9){
    tempString=tempString+s[i];
    consecutiveNo=consecutiveNo+1;
  }else{
    
    if(consecutiveNo>=10){
      let g=tempString;
      g=g.slice(g.length-10,g.length);
      let u={id:id, Name:tempString.slice(0,tempString.length-consecutiveNo-1),PhoneNumber:parseInt(g)}
      arr.push(u);
      id=id+1;
      tempString=s[i];
      
    }else    tempString=tempString+s[i];
    consecutiveNo=0;
  
}
}
if(consecutiveNo>=10){
      let g=tempString;
      g=g.slice(g.length-10,g.length);
      let u={id:id, Name:tempString.slice(0,tempString.length-consecutiveNo-1),PhoneNumber:parseInt(g)};
      arr.push(u); 
    }
// need a way to handle the spaces
return (arr.length===0) ?<div></div>: <Table users={arr} x={props.x}/>

    
}
// this will give an output as an array of objects to the table component 
export default IToArray
