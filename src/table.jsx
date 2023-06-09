import react from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { colours } from 'nodemon/lib/config/defaults';
import { colors } from '@material-ui/core';

function Table1(props){
    const users=props.users
    return ( (props.x==0) ? <div></div> :
    <div >   
        <Table aria-label="simple table">
       <TableHead>
         <TableRow >
           <TableCell>S.No</TableCell>
           <TableCell align="right">Name</TableCell>
           <TableCell align="right">Phone Number</TableCell>
           <TableCell align="right">Click to Call </TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {users.map((user) => (
           <TableRow key={user.id}>
             <TableCell component="th" scope="row">
               {user.id}
             </TableCell>
             <TableCell align="right">{user.Name}</TableCell>
             <TableCell align="right">{user.PhoneNumber}</TableCell>
             <TableCell align="right"><a class="button" href={"tel:"+user.PhoneNumber.toString()}>call now</a></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
        </div>)
        }
export default Table1

// here we take in the data from the array and represent it a tabular form where the users can click to call and it is all done