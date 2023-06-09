import react from 'react';

function Table(props){
    const users=props.users
    return ( <div background-color='yellow'>
        <table> 
        {users.map((user) => 
        <div>
        <tr>
        <td>{user.id}</td> <td>{user.Name}</td><td>{user.PhoneNumber}</td><td><a href={"tel:"+user.PhoneNumber.toString()}>call now</a></td>
        </tr>
        </div>)}
        </table>
    </div>
);
}
export default Table

// here we take in the data from the array and represent it a tabular form where the users can click to call and it is all done