import styles from './searchbar.module.css';

import { useState } from "react";


   const SearchBar =({onSearch}) =>{
   const [id,setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div class={styles.container}>
         <input type='search' clasName={styles.searchBar} value={id} placeholder={`Enter ID`} onChange={handleChange}/>
         <button onClick={()=>onSearch(id)}>Search</button>
      </div>
   );
}

export default SearchBar;