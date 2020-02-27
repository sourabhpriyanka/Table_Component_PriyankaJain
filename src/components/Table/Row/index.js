import React from 'react';


const TableRow = (props) =>{

        return (
            <tr>
			    <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>);
    
}

export default TableRow;