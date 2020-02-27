import React from 'react';
import './Paggination.css';


const Paggination =(props) =>{
        const pageLinks=[];
		for(let i=1; i<= props.pages;i++){
			let active = (props.currentPage == i ? 'active':'');
			
			pageLinks.push(<li  key={i} onClick={() => props.nextPage(i)} ><a href="#" className={active}>{i}</a></li>);
			
		}
        return (
            <div >
			      <ul className="pagination">
				    {props.currentPage >1 ?<li  onClick={() => props.nextPage(props.currentPage-1)}><a href="#">&laquo;</a></li>:''}
				    {pageLinks}
					{props.currentPage < props.pages ?<li  onClick={() => props.nextPage(props.currentPage+1)}><a href="#">&raquo;</a></li>:''}
				  </ul>
            </div>)
    
}

export default Paggination;