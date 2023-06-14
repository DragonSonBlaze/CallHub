import react,{useState} from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Table1(props){
    const users=props.users
    let arr=[];
    for(let i=0;i<users.length;++i) arr[i]="beforeClick"
    const [colorarr, setIsActiveIndex] = useState(arr); 
    const handleColorChange = (i) => {
        if(colorarr.length===0){
          let newArr=arr;
          arr[i]="afterClick";
          setIsActiveIndex(arr);
          console.log(colorarr);
        }else{
          let newArr=[...colorarr];
          newArr[i]="afterClick";
          setIsActiveIndex(newArr);
        }
        
    };
  return (
  (users.length==0) ? <div></div> :
    <div >   
        <Table aria-label="simple table">
       <TableHead>
         <TableRow >
           <TableCell>S.No</TableCell>
           <TableCell align="right">Name</TableCell>
           <TableCell align="right">Phone Number</TableCell>
           <TableCell align="right">Click to Call </TableCell>
           <TableCell align="right" >Remarks</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {users.map((user,i) => (
           <TableRow class={(colorarr.length===0) ? "beforeClick" : colorarr[i]}key={user.id}>
             <TableCell component="th" scope="row">               {user.id}             </TableCell>
             <TableCell align="right">{user.Name}</TableCell>
             <TableCell align="right">{user.PhoneNumber}</TableCell>
             <TableCell align="right"><a class="button"  onClick={ () => { handleColorChange(i); }  } href={"tel:"+user.PhoneNumber.toString()}>call now</a></TableCell>
             <TableCell align="right"><input placeholder="remarks" type="text"></input></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
        </div>)
}
        
export default Table1

// here we take in the data from the array and represent it a tabular form where the users can click to call and it is all done