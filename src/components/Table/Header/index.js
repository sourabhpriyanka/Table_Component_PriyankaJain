import React from 'react';


const TableHeader = (props) =>{
		let headercolum = props.header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      });
        return (
				<tr>
				 {headercolum}
				</tr>)
    
}

export default TableHeader;