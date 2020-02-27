import React from 'react';

const FilterDropdown =(props) =>{
	
	    const uniqueArr = [... new Set(props.data.map(data => data.name))]
		let seloption= uniqueArr.map((name) => {
          return (
		    <option value={name} key={name}>{name}</option>
          )
        });
		
        return (<div>
            <select className="searchbox"  onChange={(e) => props.update(e)} >
			 <option value="">Select Name</option>
			{seloption}
			</select>
        </div>);
    
}

export default FilterDropdown;
