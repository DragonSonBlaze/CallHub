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
    };
    const Important=(i) =>{
      // let newArr=[...colorarr];
      // newArr[i]="important";
      // setIsActiveIndex(newArr);
      let newArr=[...colorarr];
      for(let j=i;j>0;--j) newArr[j]=newArr[j-1];
      newArr[0]="important";
      setIsActiveIndex(newArr);
      let t=[...NewUser];
      let k= t[i];
      for(let j=i;j>0;--j) t[j]=t[j-1];
      t[0]=k;
      ChangeUser(t);
      // newArr[0]="important";
      // setIsActiveIndex(newArr);


    }
  return (
  (users.length==0) ? <div></div> :
    <div >   
        <Table aria-label="simple table">
       <TableHead>
         <TableRow class="backg" >
           <TableCell>S.No</TableCell>
           <TableCell align="center">Name</TableCell>
           <TableCell align="center">Phone Number</TableCell>
           <TableCell align="center" >Remarks</TableCell>
           <TableCell align="center">Mark as Favourite</TableCell>
           <TableCell align="center">Click to Call </TableCell>
           <TableCell align="center">Click to Delete</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {NewUser.map((user,i) => (
           <TableRow class={ colorarr[i]}key={user.id}>
             <TableCell component="th" scope="row">              {i+1}             </TableCell>
             <TableCell align="center">{user.Name}</TableCell>
             <TableCell align="center">{user.PhoneNumber}</TableCell>
             <TableCell align="center"><input class="rounded-input" placeholder="remarks" type="text"></input></TableCell>
             <TableCell align="center"><button  class="button2"onClick={ () => { Important(i); }  }>Mark Important</button></TableCell>
             <TableCell align="center"><a class="button"  onClick={ () => { handleColorChange(i); }  } href={"tel:"+user.PhoneNumber.toString()}>call now</a></TableCell>
             <TableCell align="center"><button onClick={ () => { ToDelete(i); }  } class="button1">    <span>Delete Item</span></button></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
        </div>)
}
export default Table1

// here we take in the data from the array and represent it a tabular form where the users can click to call and it is all done