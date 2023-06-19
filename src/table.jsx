import react,{useState,useEffect} from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



function Table1(props){
    let users=props.users
    console.log("what is the users when received ",users)
    let arr=[];
    for(let i=0;i<users.length;++i) arr[i]="beforeClick";
    const [colorarr, setIsActiveIndex] = useState(arr); 
    const [NewUser,ChangeUser]=useState(users);    
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
    // the main problem is no for loops are alowed in the toDelete function, also another issue is it does not go line by line as this is a compliler language sort of so the array is called then and there 
    //
    const ToDelete=(i)=>{
      
    let arr=[...NewUser];
    let arr1=[...colorarr];
    for(let j=i;j<NewUser.length-1;++j) {
      arr[j]=arr[j+1];
      arr[j].id=j+1;
      arr1[j]=arr1[j+1];

    }
    arr.pop();
    arr1.pop();
    console.log("users in delete part ",users);
    setIsActiveIndex(arr1);
    ChangeUser(arr);

    //   colorarr.pop();
    //   users.pop();
    //   console.log("inside delete coloarr ",colorarr);
    //   console.log("insider delete users ",users);
      // console.log("inside delete NewUsers ", NewUser);

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
      for(let j=0;j<=i;++j) t[j].id=j+1;
      console.log("in the important part ",users)
      ChangeUser(t);
      // newArr[0]="important";
      // setIsActiveIndex(newArr);


    }
    // useEffect(()=>{
    //   let arr=[...NewUser];
    //   let g=[...users];
    //   let ui=[...colorarr];
    //   let si=arr.length;
    //   const s = new Set();
    //   for(let i=0;i<arr.length;++i) s.add(arr[i].PhoneNumber);
    //   console.log(s);
    //   for(let i=0;i<g.length;++i){
    //     if(s.has(g[i].PhoneNumber)) continue;
    //     else{
    //       let hj=g[i];
    //       hj.id=si;
    //       si=si+1;
    //       arr.push(hj);
    //       ui.push("beforeClick");
    //     }
    //   }
    //   ChangeUser(arr);
    //   setIsActiveIndex(ui);

        
    //   if(g.length >0 && arr.length>0){
    //   if(arr[arr.length-1].Name!==g[g.length-1].Name){
    //     let u=arr.length;
    //     let hp=[...colorarr];
    //     for(let i=0;i<g.length;++i){
    //       let hj=g[i];
    //       hj.id=u+i+1;
    //       hp.push("beforeClick");
    //       arr.push(hj);
    //     }       
    //     setIsActiveIndex(hp);
    //     ChangeUser(arr);
    //  }
    // }
    // });
    console.log("what does the users become outside ",users)
    console.log("state of the array to be rendered ",NewUser)
  return (
  (users.length==0) ? <div></div> :
    <div >   
        <Table  aria-label="simple table">
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
     <p >Going to the contants/ about page will erase the contact information here!      </p>        </div>)
}
export default Table1

// here we take in the data from the array and represent it a tabular form where the users can click to call and it is all done