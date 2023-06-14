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
    for(let i=0;i<users.length;++i) arr[i]="beforeClick";

    const [colorarr, setIsActiveIndex] = useState(arr); 
    
      const [NewUser,ChangeUser]=useState(users);
      console.log(NewUser);
    
    
    const handleColorChange = (i) => {
        if(colorarr.length===0){
          arr[i]="afterClick";
          setIsActiveIndex(arr);
          console.log(colorarr);
        }else{
          let newArr=[...colorarr];
          newArr[i]="afterClick";
          setIsActiveIndex(newArr);
        }
        
    };
    const ToDelete=(i)=>{
      ChangeUser((current) =>
      current.filter((fruit) => fruit.id !== i),
    );
      for(let i=0;i<NewUser.length;++i) NewUser[i].id=i;
      for(let j=i;j<colorarr.length-1;++j ) colorarr[j]=colorarr[j+1];
      console.log(colorarr);
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
           <TableCell align="right" >Remarks</TableCell>
           <TableCell align="right">Click to Call </TableCell>
           <TableCell align="right">Click to Delete</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {NewUser.map((user,i) => (
           <TableRow class={(colorarr.length===0) ? "beforeClick" : colorarr[i]}key={user.id}>
             <TableCell component="th" scope="row">              {i+1}             </TableCell>
             <TableCell align="right">{user.Name}</TableCell>
             <TableCell align="right">{user.PhoneNumber}</TableCell>
             <TableCell align="right"><input placeholder="remarks" type="text"></input></TableCell>
             <TableCell align="right"><a class="button"  onClick={ () => { handleColorChange(i); }  } href={"tel:"+user.PhoneNumber.toString()}>call now</a></TableCell>
             <TableCell align="right"><button onClick={ () => { ToDelete(i); }  }type="submit">click to delete</button></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
        </div>)
}
export default Table1

// here we take in the data from the array and represent it a tabular form where the users can click to call and it is all done