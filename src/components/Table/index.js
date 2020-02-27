import React from 'react';
import TableHeader from './Header';
import TableRow from './Row';

const Table = (props) =>{
	
		let header = Object.keys(props.data[0]);
        return (
            <div>
                <table  id="students">
                    <tbody>
					   
					    <TableHeader header={header}/>
                        {props.data.map(function (d, i) {
                            return <TableRow key={'person-' + i}
							    id={d.id}
                                name={d.name}
                                email={d.username}
                                phone={d.email}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    
}
export default Table;