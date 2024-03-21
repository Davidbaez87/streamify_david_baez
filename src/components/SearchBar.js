import { useState } from "react"



const SearchBar=({onSearch})=>{
    const [searchTerm,setSearchTerm]=useState('');

    const handleSubmit=(event)=>{
            event.preventDefault();
            onSearch(searchTerm);
    }

    const handleChange=(event)=>{
            setSearchTerm(event.target.value);
    }
    return(
        <form onSubmit ={handleSubmit}>
            <input type="text" placeholder="Type a word...." value ={searchTerm} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchBar;