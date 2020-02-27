import React, { Component } from 'react';
import FilterDropdown from './components/Table/Filter';
import Table from "./components/Table";
import Pagination from './components/Table/Pagination';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
			totalResult:0,
			currentPage:1,
			pageSize:5,
			sortType:'asc',
			sortData:[]
        };
		
    }
     handleChange(event) {
        this.setState({ search: event.target.value });
    }
	
	nextPage =(pageNumber)=>{
		this.setState({ currentPage: pageNumber });
	}
	

	
	sortBy =(key)=>{
		let comparison = 0;
		let sortarr = this.props.data.sort(function (a, b) {
           if( a[key] > b[key]){
			  comparison = 1;  
		   }else if (a[key] < b[key]) {
              comparison = -1;
           }
		   return comparison;
        });
	    this.setState({ sortData: sortarr });
	}
	
    render() {
        
        
	   /*custom filter search by name*/
       let employees = this.props.data,
        searchString = this.state.search.trim().toLowerCase();
	   if (searchString.length > 0) {
            employees = employees.filter((e) => e.name.toLowerCase().match(searchString));	
        }
		
	   /*pagination calculation*/	
	   let startIndex = (this.state.currentPage-1)*this.state.pageSize;
       let endIndex = startIndex + this.state.pageSize;	
       let totalResult =(employees.length);
	   const numberPages = Math.floor(totalResult/4);
	   
        
        return (
            <div>
			    <h1 id='title'>React Dynamic Table</h1>
			    {totalResult >0 ?<FilterDropdown update={(e) => this.handleChange(e)}  data={this.props.data}/>:''}
				{totalResult >0?<Table data={totalResult>4?employees.slice(startIndex,endIndex):employees} sortBy={this.sortBy}/>:''}
			    {totalResult >4 ?<Pagination pages={numberPages} nextPage={this.nextPage}  currentPage={this.state.currentPage}/>:''}
            </div>
        )
    }
}

export default App;
